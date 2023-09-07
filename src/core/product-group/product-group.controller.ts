import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProductGroupService } from './product-group.service';
import { ProductGroupFilterRequest } from './dtos/requests/product-group-filter.request';
import { SelectItemResponse } from 'src/shared/http/select-item.response';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';

@Controller('product-groups')
@ApiTags('product-groups')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProductGroupController {
    constructor(private readonly productGroupService: ProductGroupService) { }

    @Get('items')
    public async filterByName(@Query() request: ProductGroupFilterRequest): Promise<SelectItemResponse[]> {
        const response = await this.productGroupService.filterByName(request);
        return response;
    }
}
