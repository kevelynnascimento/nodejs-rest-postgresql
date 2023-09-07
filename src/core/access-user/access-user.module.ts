import { Module } from '@nestjs/common';
import { AccessUserController } from './access-user.controller';
import { AccessUserService } from './access-user.service';
import { USER_REPOSITORY_NAME, AccessUserRepository } from './access-user.repository';
import { DataSource } from 'typeorm';
import { AccessUserEntity } from './access-user.entity';
import { DatabaseModule } from 'src/shared/database/database.module';
import { Configuration } from 'src/configs/env.config';
import { KafkaModule } from 'src/shared/kafka/kafka.module';
import { AuthModule } from 'src/shared/auth/auth.module';

const envs = Configuration.envs();

export const userRepositories = [
    {
        provide: USER_REPOSITORY_NAME,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(AccessUserEntity),
        inject: [envs.database.name],
    }
];

@Module({
    imports: [DatabaseModule, KafkaModule, AuthModule],
    controllers: [AccessUserController],
    providers: [
        ...userRepositories,
        AccessUserService,
        AccessUserRepository
    ]
})
export class AccessUserModule { }
