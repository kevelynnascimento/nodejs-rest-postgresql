import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { ProductGroupRepository, REPOSITORY_NAME } from './product-group.repository';
import { Configuration } from 'src/configs/env.config';
import { DataSource } from 'typeorm';
import { ProductGroupEntity } from './product-group.entity';
import { ProductGroupService } from './product-group.service';
import { ProductGroupController } from './product-group.controller';

const envs = Configuration.envs();

export const moduleRepositories = [
    {
        provide: REPOSITORY_NAME,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductGroupEntity),
        inject: [envs.database.name],
    }
];

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ...moduleRepositories,
        ProductGroupRepository,
        ProductGroupService
    ],
    exports: [
        ProductGroupRepository
    ],
    controllers: [ProductGroupController]
})
export class ProductGroupModule { }
