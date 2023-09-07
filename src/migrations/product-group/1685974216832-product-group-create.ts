import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductGroupCreate1685974216832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE product_group (
            id VARCHAR(64) NOT NULL,
            creation_date TIMESTAMP NOT NULL,
            update_date TIMESTAMP NOT NULL,
            name VARCHAR(45) NOT NULL,
            PRIMARY KEY (id)
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE product_group;`);
    }

}
