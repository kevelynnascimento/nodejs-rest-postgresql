import { Module } from '@nestjs/common';
import { ProductGroupModule } from './product-group/product-group.module';
import { ProductSubgroupModule } from './product-subgroup/product-subgroup.module';
import { InventoryModule } from './inventory/inventory.module';
import { AccessUserModule } from './access-user/access-user.module';

@Module({
  imports: [
    AccessUserModule,
    ProductGroupModule,
    ProductSubgroupModule,
    InventoryModule
  ]
})
export class CoreModule { }
