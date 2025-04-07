import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ClientsModule.register([
      {
         name: 'AUTH_PACKAGE',
         transport:Transport.GRPC,
         options:{
          package:'auth',
          protoPath:join(__dirname, '../../proto/auth.proto'),
          url: 'localhost:50051',
         }
      }
    ]),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
