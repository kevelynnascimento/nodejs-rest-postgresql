import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { ProductSubgroupEntity } from './product-subgroup.entity';
import { BaseRepository } from 'src/shared/database/base.repository';

export const REPOSITORY_NAME = 'ProductSubgroupRepository';

@Injectable()
export class ProductSubgroupRepository extends BaseRepository{
    constructor(
        @Inject(REPOSITORY_NAME)
        private readonly repository: Repository<ProductSubgroupEntity>,
    ) {
        super();
    }

    public async filterByName(name: string): Promise<ProductSubgroupEntity[]> {
        let filters: FindOptionsWhere<ProductSubgroupEntity> = {};

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
