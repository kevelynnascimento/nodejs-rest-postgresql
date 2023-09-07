import { MigrationInterface, QueryRunner } from "typeorm"

export class InventoryCreate1686752966067 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE inventory (
      id VARCHAR(64) NOT NULL, 
      origin_id VARCHAR(64) NOT NULL, 
      creation_date TIMESTAMP NOT NULL, 
      update_date TIMESTAMP NOT NULL, 
      code VARCHAR(150) NOT NULL, 
      name VARCHAR(150) NOT NULL, 
      position VARCHAR(150) NOT NULL, 
      unit VARCHAR(150) NOT NULL, 
      quantity_in_boxes INT NOT NULL, 
      quantity_in_pallets INT NOT NULL, 
      product_group_id VARCHAR(64) NOT NULL, 
      product_subgroup_id VARCHAR(64) NOT NULL, 
      PRIMARY KEY (id), 
      CONSTRAINT fk_inventory_product_group FOREIGN KEY (product_group_id) REFERENCES product_group (id) ON DELETE NO ACTION ON UPDATE NO ACTION, 
      CONSTRAINT fk_inventory_product_subgroup FOREIGN KEY (product_subgroup_id) REFERENCES product_subgroup (id) ON DELETE NO ACTION ON UPDATE NO ACTION
    );    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE inventory;`);
  }

}
