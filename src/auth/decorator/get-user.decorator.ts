import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    
    // If data is provided, return only that field from the user object
    if (data) {
      return request.user[data];
    }
    
    // Otherwise return the whole user object
    return request.user;
  },
); 