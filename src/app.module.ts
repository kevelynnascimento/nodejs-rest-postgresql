import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './configs/env.config';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration.envs],
      isGlobal: true,
      cache: true
    }),
    CoreModule,
    SharedModule
  ]
})
export class AppModule { }
