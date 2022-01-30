import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { grpcClientOptions } from './grpc-client.options';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HerosModule } from './hero/heros.module';

@Module({
  imports: [
    HerosModule,
    ClientsModule.register([
      {
        ...grpcClientOptions,
        name: 'HERO_PACKAGE',
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
