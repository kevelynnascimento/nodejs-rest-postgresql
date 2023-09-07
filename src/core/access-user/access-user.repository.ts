import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AccessUserEntity } from "./access-user.entity";
import { BaseRepository } from 'src/shared/database/base.repository';

export const USER_REPOSITORY_NAME = 'AccessUserRepository';

@Injectable()
export class AccessUserRepository extends BaseRepository {
    constructor(
        @Inject(USER_REPOSITORY_NAME)
        private readonly repository: Repository<AccessUserEntity>,
    ) {
        super();
    }

    public async findAll(): Promise<AccessUserEntity[]> {
        const users = await this.repository.find();
        return users;
    }

    public async insert(entity: AccessUserEntity): Promise<void> {
        await this.repository.insert(entity);
    }

    public async findByUsername(username: string): Promise<AccessUserEntity> {
        const user = await this.repository.findOne({
            where: { username },
            relations: [],
        });

        return user;
    }

    public async update(entity: AccessUserEntity): Promise<void> {
        await this.repository.save(entity);
    }
}
