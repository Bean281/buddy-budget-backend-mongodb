import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, ForgotPasswordDto, ResetPasswordDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    const hashedPassword = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          firstName: dto.firstName || null,
          lastName: dto.lastName || null,
        },
      });

      const token = await this.signToken(user.id, user.email);

      const { password, ...userWithoutPassword } = user;
      return {
        ...userWithoutPassword,
        ...token,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already in use');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Invalid credentials');

    const passwordMatches = await argon.verify(user.password, dto.password);

    if (!passwordMatches) throw new ForbiddenException('Invalid credentials');

    const token = await this.signToken(user.id, user.email);

    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      ...token,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      return { message: 'If your email exists in our system, you will receive a password reset link' };
    }

    const resetToken = uuidv4();
    
    console.log(`Reset token for ${dto.email}: ${resetToken}`);

    return { 
      message: 'If your email exists in our system, you will receive a password reset link',
      resetToken: process.env.NODE_ENV === 'development' ? resetToken : undefined
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    if (!dto.token || dto.token.length < 10) {
      throw new ForbiddenException('Invalid reset token');
    }

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hashedPassword = await argon.hash(dto.newPassword);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return { message: 'Password has been successfully reset' };
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
