import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [DatabaseModule, AuthModule, KafkaModule],
  exports: [AuthModule]
})
export class SharedModule { }
