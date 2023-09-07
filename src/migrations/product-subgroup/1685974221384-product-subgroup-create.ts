import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductSubgroupCreate1685974221384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE product_subgroup (
            id VARCHAR(64) NOT NULL,
            creation_date TIMESTAMP NOT NULL,
            update_date TIMESTAMP NOT NULL,
            name VARCHAR(45) NOT NULL,
            PRIMARY KEY (id)
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE product_subgroup;`);
    }

}
