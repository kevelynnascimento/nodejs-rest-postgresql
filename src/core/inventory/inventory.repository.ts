import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { InventoryEntity } from './inventory.entity';
import { InventoryFilterRequest } from './dtos/requests/inventory-filter.request';
import { BaseRepository } from 'src/shared/database/base.repository';

export const REPOSITORY_NAME = 'InventoryRepository';

@Injectable()
export class InventoryRepository extends BaseRepository {
    constructor(
        @Inject(REPOSITORY_NAME)
        private readonly repository: Repository<InventoryEntity>,
    ) {
        super();
    }

    public async filter(request: InventoryFilterRequest): Promise<[InventoryEntity[], number]> {
        let filtersQuery: FindOptionsWhere<InventoryEntity>[] = [];
        let filters: FindOptionsWhere<InventoryEntity>;

        const { productGroupId, productSubgroupId, keyword } = request;

        if (productGroupId)
            filters = { ...filters, productGroupId: productGroupId };

        if (productSubgroupId)
            filters = { ...filters, productSubgroupId: productSubgroupId };

        if (keyword) {
            filtersQuery = [
                ...filtersQuery,
                {
                    name: Like(`%${keyword}%`),
                    ...filters
                },
                {
                    code: Like(`%${keyword}%`),
                    ...filters
                }
            ];
        } else {
            filtersQuery = filters ? [filters] : [];
        }

        const inventories = await this.repository.findAndCount({
            where: filtersQuery ?? [],
            ...this.getPagination(request),
        });

        return inventories;
    }
}
