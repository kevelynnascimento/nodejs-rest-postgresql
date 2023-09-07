import { Injectable } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';
import { PaginationResponse } from 'src/shared/http/pagination.response';
import { InventoryFilterResponse } from './dtos/responses/inventory-filter.response';
import { InventoryFilterRequest } from './dtos/requests/inventory-filter.request';

@Injectable()
export class InventoryService {
    constructor(
        private readonly inventoryRepository: InventoryRepository
    ) { }

    public async filter(request: InventoryFilterRequest): Promise<PaginationResponse<InventoryFilterResponse>> {
        const [inventories, count] = await this.inventoryRepository.filter(request);

        const inventoriesResponse = inventories?.map(inventory => ({
            code: inventory.code,
            name: inventory.name,
            position: inventory.position,
            unit: inventory.unit,
            quantityInBoxes: inventory.quantityInBoxes,
            quantityInPallets: inventory.quantityInPallets
        }));

        const response = {
            rows: inventoriesResponse,
            count: count,
        };

        return response;
    }
}