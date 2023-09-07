import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ProductSubgroupFilterRequest {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    name?: string;
}
