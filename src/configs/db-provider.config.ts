import migrationsConfig from './db-connection.config';
import { Configuration } from './env.config';

const envs = Configuration.envs();

export const databaseProviders = [
    {
        provide: envs.database.name,
        useFactory: async () => {
            const dataSource = migrationsConfig;
            return dataSource.initialize();
        },
    },
];