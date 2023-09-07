import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductSubgroupService } from './product-subgroup.service';
import { ProductSubgroupFilterRequest } from './dtos/requests/product-subgroup-filter.request';
import { SelectItemResponse } from 'src/shared/http/select-item.response';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';

@Controller('product-subgroups')
@ApiTags('product-subgroups')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ProductSubgroupController {
    constructor(private readonly productSubgroupService: ProductSubgroupService) { }

    @Get('items')
    public async filterByName(@Query() request: ProductSubgroupFilterRequest): Promise<SelectItemResponse[]> {
        const response = await this.productSubgroupService.filterByName(request);
        return response;
    }
}
