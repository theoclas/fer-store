import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly Price: number;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
// export class UpdateProductDto {
//   readonly name?: string;
//   readonly description?: string;
//   readonly Price?: number;
//   readonly image?: string;
//   readonly stock?: number;
// }
