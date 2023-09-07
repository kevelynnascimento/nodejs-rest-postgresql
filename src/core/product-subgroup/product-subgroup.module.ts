import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { Configuration } from 'src/configs/env.config';
import { DataSource } from 'typeorm';
import { ProductSubgroupEntity } from './product-subgroup.entity';
import { ProductSubgroupRepository, REPOSITORY_NAME } from './product-subgroup.repository';
import { ProductSubgroupService } from './product-subgroup.service';
import { ProductSubgroupController } from './product-subgroup.controller';

const envs = Configuration.envs();

export const moduleRepositories = [
    {
        provide: REPOSITORY_NAME,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductSubgroupEntity),
        inject: [envs.database.name],
    }
];

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ...moduleRepositories,
        ProductSubgroupRepository,
        ProductSubgroupService
    ],
    exports: [
        ProductSubgroupRepository
    ],
    controllers: [ProductSubgroupController]
})
export class ProductSubgroupModule { }
