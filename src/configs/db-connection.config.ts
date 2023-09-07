import { DataSource } from "typeorm"
import { Configuration } from "./env.config";

const envs = Configuration.envs();

export default new DataSource({
    type: envs.database.type,
    host: envs.database.host,
    port: +envs.database.port,
    username: envs.database.username,
    password: envs.database.password,
    database: envs.database.name,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ]
})