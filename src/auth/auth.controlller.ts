import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, ForgotPasswordDto, ResetPasswordDto } from "./dto";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags, ApiBadRequestResponse, ApiConflictResponse, ApiUnauthorizedResponse, ApiNotFoundResponse } from "@nestjs/swagger";
import { AuthUserResponse, ForgotPasswordResponse, ResetPasswordResponse } from "./models/auth.model";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    @ApiOperation({
        summary: 'Register a new user',
        description: 'Creates a new user account and returns authentication token',
    })
    @ApiCreatedResponse({
        description: 'User has been successfully registered',
        type: AuthUserResponse,
    })
    @ApiBadRequestResponse({
        description: 'Invalid input data',
    })
    @ApiConflictResponse({
        description: 'Email already in use',
    })
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    @Post('login')
    @ApiOperation({
        summary: 'User login',
        description: 'Authenticates a user and returns a JWT token',
    })
    @ApiOkResponse({
        description: 'User has been successfully authenticated',
        type: AuthUserResponse,
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid credentials',
    })
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }

    @Post('forgot-password')
    @ApiOperation({
        summary: 'Forgot password',
        description: 'Initiates the password reset process',
    })
    @ApiOkResponse({
        description: 'Password reset process initiated',
        type: ForgotPasswordResponse,
    })
    forgotPassword(@Body() dto: ForgotPasswordDto) {
        return this.authService.forgotPassword(dto);
    }

    @Post('reset-password')
    @ApiOperation({
        summary: 'Reset password',
        description: 'Resets the user password using a reset token',
    })
    @ApiOkResponse({
        description: 'Password has been successfully reset',
        type: ResetPasswordResponse,
    })
    @ApiBadRequestResponse({
        description: 'Invalid token or password',
    })
    @ApiNotFoundResponse({
        description: 'User not found',
    })
    resetPassword(@Body() dto: ResetPasswordDto) {
        return this.authService.resetPassword(dto);
    }
}