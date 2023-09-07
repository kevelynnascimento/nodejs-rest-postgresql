
import * as dotenv from 'dotenv';

dotenv.config();

export class Configuration {

    static get envs() {
        return () => ({
            port: process.env.PORT || 5000,
            database: {
                type: 'postgres' as 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                name: process.env.DB_NAME
            }
        });
    }
}
