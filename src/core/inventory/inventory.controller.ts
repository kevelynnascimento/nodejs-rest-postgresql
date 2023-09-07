import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationResponse } from 'src/shared/http/pagination.response';
import { InventoryService } from './inventory.service';
import { InventoryFilterRequest as InventoryFilterRequest } from './dtos/requests/inventory-filter.request';
import { InventoryFilterResponse as InventoryFilterResponse } from './dtos/responses/inventory-filter.response';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';

@Controller('inventories')
@ApiTags('inventories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    public async filter(@Query() request: InventoryFilterRequest): Promise<PaginationResponse<InventoryFilterResponse>> {
        const response = await this.inventoryService.filter(request);
        return response;
    }
}