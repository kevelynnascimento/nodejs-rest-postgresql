import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductGroupInsert1685974727031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO product_group (id, creation_date, update_date, name)
        VALUES
            (gen_random_uuid(), NOW(), NOW(), 'AP'),
            (gen_random_uuid(), NOW(), NOW(), 'FW'),
            (gen_random_uuid(), NOW(), NOW(), 'EQ'),
            (gen_random_uuid(), NOW(), NOW(), 'UNDENTIFIED');            
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM product_group 
        WHERE name IN ('AP', 'FW', 'EQ', 'UNDENTIFIED');        
        `);
    }

}
