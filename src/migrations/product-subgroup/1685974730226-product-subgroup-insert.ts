import { MigrationInterface, QueryRunner } from "typeorm"

export class ProductSubgroupInsert1685974730226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO product_subgroup (id, creation_date, update_date, name)
        VALUES
            (gen_random_uuid(), NOW(), NOW(), 'NSW RUNNING'),
            (gen_random_uuid(), NOW(), NOW(), 'RUNNING'),
            (gen_random_uuid(), NOW(), NOW(), 'ATHLETIC DEPARTMENT'),
            (gen_random_uuid(), NOW(), NOW(), 'YOUNG ATHLETES NSW'),
            (gen_random_uuid(), NOW(), NOW(), 'FOOTBALL/SOCCER TEAMSPORT'),
            (gen_random_uuid(), NOW(), NOW(), 'SPORTS ACC.'),
            (gen_random_uuid(), NOW(), NOW(), 'TECHLAB');             
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM product_subgroup
        WHERE name IN ('NSW RUNNING', 'RUNNING', 'ATHLETIC DEPARTMENT', 'YOUNG ATHLETES NSW', 'FOOTBALL/SOCCER TEAMSPORT', 'SPORTS ACC.', 'TECHLAB');               
        `);
    }

}
