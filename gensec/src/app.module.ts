import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // registe new client fo microservice
    ClientsModule.register([
     {
      name:'AUTH_PACKAGE',
      transport:Transport.GRPC,
      
      options:{
        package:'auth',
        protoPath:join(__dirname, '../../proto/auth.proto'),
        url: 'localhost:50051',

        
      }
     }

    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
