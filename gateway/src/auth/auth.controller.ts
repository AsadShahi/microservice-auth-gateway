import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject, OnModuleInit } from '@nestjs/common';
import { Observable, catchError } from 'rxjs';

interface AuthService {
  Register(data: { username: string, password: string }): Observable<{ message: string }>;
}

@Controller()
export class AuthController implements OnModuleInit {
  private authService: AuthService;

  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @Post('register')
  register(@Body() body: { username: string; password: string }) {
    return this.authService.Register(body)
      .pipe(
        catchError(error => {
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        })
      );
  }
}
