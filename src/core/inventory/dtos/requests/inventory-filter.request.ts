import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { PaginationRequest } from 'src/shared/http/pagination.request';

export class InventoryFilterRequest extends PaginationRequest {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    productGroupId?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    productSubgroupId?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    keyword?: string;
}
