import { Injectable } from '@nestjs/common';
import { ProductSubgroupRepository } from './product-subgroup.repository';
import { SelectItemResponse } from 'src/shared/http/select-item.response';
import { ProductSubgroupFilterRequest } from './dtos/requests/product-subgroup-filter.request';

@Injectable()
export class ProductSubgroupService {
    constructor(
        private readonly productSubgroupRepository: ProductSubgroupRepository
    ) { }

    public async filterByName(request: ProductSubgroupFilterRequest): Promise<SelectItemResponse[]> {
        const { name } = request;

        const productSubgroups = await this.productSubgroupRepository.filterByName(name);

        const response = productSubgroups?.map(productSubgroup => ({
            id: productSubgroup.id,
            value: productSubgroup.name
        }));

        return response;
    }
}
