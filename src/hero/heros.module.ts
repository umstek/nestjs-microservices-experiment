import { Module } from '@nestjs/common';

import { HeroesController } from './heros.controller';

@Module({
  controllers: [HeroesController],
  providers: [],
})
export class HerosModule {}
