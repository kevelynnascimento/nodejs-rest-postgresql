import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { ProductGroupEntity } from './product-group.entity';
import { BaseRepository } from 'src/shared/database/base.repository';

export const REPOSITORY_NAME = 'ProductGroupRepository';

@Injectable()
export class ProductGroupRepository extends BaseRepository {
    constructor(
        @Inject(REPOSITORY_NAME)
        private readonly repository: Repository<ProductGroupEntity>,
    ) {
        super();
     }

    public async filterByName(name: string): Promise<ProductGroupEntity[]> {
        let filters: FindOptionsWhere<ProductGroupEntity> = {};

        if (name) {
            filters = {
                ...filters,
                name: Like(`%${name}%`)
            }
        }

        const productSubgroups = await this.repository.find({
            where: filters
        });

        return productSubgroups;
    }
}
