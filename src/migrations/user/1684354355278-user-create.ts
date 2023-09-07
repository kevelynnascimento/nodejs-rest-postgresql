import { MigrationInterface, QueryRunner } from "typeorm";

export class UserCreate1684354355278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE access_user (
            id VARCHAR(64) NOT NULL,
            creation_date TIMESTAMP NOT NULL,
            update_date TIMESTAMP NOT NULL,
            name VARCHAR(45) NOT NULL,
            email VARCHAR(150) NOT NULL,
            username VARCHAR(150) NOT NULL,
            password VARCHAR(150) NOT NULL,    
            PRIMARY KEY (id)
        );        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {      
        await queryRunner.query(`DROP TABLE access_user;`);
    }
}
