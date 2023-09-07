import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductGroupEntity } from '../product-group/product-group.entity';
import { ProductSubgroupEntity } from '../product-subgroup/product-subgroup.entity';

@Entity('inventory')
export class InventoryEntity {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @PrimaryColumn({ name: 'origin_id' })
    originId: string;

    @Column({ name: 'creation_date' })
    creationDate: Date;

    @Column({ name: 'update_date' })
    updateDate: Date;

    @Column({ name: 'code' })
    code: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'position' })
    position: string;

    @Column({ name: 'unit' })
    unit: string;

    @Column({ name: 'quantity_in_boxes' })
    quantityInBoxes: number;

    @Column({ name: 'quantity_in_pallets' })
    quantityInPallets: number;

    @Column({ name: 'product_group_id' })
    productGroupId: string;

    @Column({ name: 'product_subgroup_id' })
    productSubgroupId: string;

    @ManyToOne(() => ProductGroupEntity)
    @JoinColumn({ name: 'product_group_id', referencedColumnName: 'id' })
    productGroup: ProductGroupEntity;

    @ManyToOne(() => ProductSubgroupEntity)
    @JoinColumn({ name: 'product_subgroup_id', referencedColumnName: 'id' })
    productSubgroup: ProductSubgroupEntity;
}