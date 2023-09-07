import { Injectable } from '@nestjs/common';
import { ProductGroupRepository } from './product-group.repository';
import { ProductGroupFilterRequest } from './dtos/requests/product-group-filter.request';
import { SelectItemResponse } from 'src/shared/http/select-item.response';

@Injectable()
export class ProductGroupService {
    constructor(
        private readonly productGroupRepository: ProductGroupRepository
    ) { }

    public async filterByName(request: ProductGroupFilterRequest): Promise<SelectItemResponse[]> {
        const { name } = request;

        const productGroups = await this.productGroupRepository.filterByName(name);

        const response = productGroups?.map(productSubgroup => ({
            id: productSubgroup.id,
            value: productSubgroup.name
        }));

        return response;
    }
}
