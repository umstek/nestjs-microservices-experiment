import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

import { grpcClientOptions } from '../grpc-client.options';

export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}

@Controller()
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private heroService: HeroService;

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get()
  execute(): Observable<any> {
    return this.heroService.findOne({ id: 1 });
  }

  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    const items: Hero[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' }
    ];
    return items.find(({ id }) => id === data.id);
  }
}
