import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  Register(data: { username: string; password: string }): { message: string } {
    //
    if (data.username === 'error') {
      throw new RpcException('Username is not allowed');
    }
    

    console.log('uSERname User:', data.username);
    console.log('password user:', data.password);
    return { message: 'User registered successfully' };
  }
}
