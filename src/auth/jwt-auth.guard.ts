import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Call the default canActivate method from AuthGuard
    return (await super.canActivate(context)) as boolean;
  }

  // Optionally, you can override handleRequest if you want to customize the error handling
  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

/*
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Allow access to the login route without authentication
    if (request.path === '/auth/login') {
      return true; // Grant access to the login route
    }

    // Call the default canActivate method from AuthGuard for other routes
    return (await super.canActivate(context)) as boolean;
  }

  // Optionally, you can override handleRequest if you want to customize the error handling
  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
*/