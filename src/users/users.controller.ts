import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from 'generated/prisma';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/common/decorate';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser() {}
}
