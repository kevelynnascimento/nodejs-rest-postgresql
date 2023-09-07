import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('product_subgroup')
export class ProductSubgroupEntity {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'creation_date' })
    creationDate: Date;

    @Column({ name: 'update_date' })
    updateDate: Date;

    @Column({ name: 'name' })
    name: string;
}
