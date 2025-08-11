import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
    // This guard will be used to protect routes
    // It will automatically use the JWT strategy we defined
}