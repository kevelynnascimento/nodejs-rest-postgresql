import { Module } from '@nestjs/common';
import { InventoryService as InventoryService } from './inventory.service';
import { Configuration } from 'src/configs/env.config';
import { InventoryRepository as InventoryRepository, REPOSITORY_NAME } from './inventory.repository';
import { DataSource } from 'typeorm';
import { InventoryEntity } from './inventory.entity';
import { DatabaseModule } from 'src/shared/database/database.module';
import { InventoryController as InventoryController } from './inventory.controller';
import { ProductGroupModule } from '../product-group/product-group.module';
import { ProductSubgroupModule as ProductSubgroupModule } from '../product-subgroup/product-subgroup.module';

const envs = Configuration.envs();

export const moduleRepositories = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(InventoryEntity),
    inject: [envs.database.name],
  }
];

@Module({
  imports: [
    DatabaseModule,
    ProductGroupModule,
    ProductSubgroupModule
  ],
  providers: [
    ...moduleRepositories,
    InventoryService,
    InventoryRepository
  ],
  exports: [
    InventoryService
  ],
  controllers: [
    InventoryController
  ]
})
export class InventoryModule { }
