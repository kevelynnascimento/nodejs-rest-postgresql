import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('product_group')
export class ProductGroupEntity {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'creation_date' })
    creationDate: Date;

    @Column({ name: 'update_date' })
    updateDate: Date;

    @Column({ name: 'name' })
    name: string;
}
