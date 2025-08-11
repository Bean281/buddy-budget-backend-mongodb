import { ApiProperty } from '@nestjs/swagger';

export class AuthUserResponse {
  @ApiProperty({
    description: 'Unique identifier for the user',
    example: 'cl9ebq7xj000023l29wbg5b2j',
  })
  id: string;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
    nullable: true,
  })
  firstName: string | null;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
    nullable: true,
  })
  lastName: string | null;

  @ApiProperty({
    description: 'User profile image URL',
    example: 'https://example.com/profiles/avatar.jpg',
    nullable: true,
  })
  profileImageUrl: string | null;

  @ApiProperty({
    description: 'Date when the user was created',
    example: '2023-01-15T10:30:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the user was last updated',
    example: '2023-04-20T14:15:30.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'User preferred currency',
    example: 'USD',
  })
  currency: string;

  @ApiProperty({
    description: 'JWT access token for authentication',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  access_token: string;
}

export class ForgotPasswordResponse {
  @ApiProperty({
    description: 'Response message',
    example: 'If your email exists in our system, you will receive a password reset link',
  })
  message: string;

  @ApiProperty({
    description: 'Reset token (only in development mode)',
    example: 'a1b2c3d4-5678-90ab-cdef-ghijklmnopqr',
    required: false,
  })
  resetToken?: string;
}

export class ResetPasswordResponse {
  @ApiProperty({
    description: 'Response message',
    example: 'Password has been successfully reset',
  })
  message: string;
} 