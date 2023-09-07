import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/configs/db-provider.config';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }
