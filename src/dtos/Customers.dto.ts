import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import {PartialType} from '@nestjs/mapped-types';


export class CreateCustomerDto{
  // @IsNumber()
  // @IsNotEmpty()
  // readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly documento: string;
  @IsString()
  @IsNotEmpty()
  nombre: string;
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  edad: number;
  @IsString()
  @IsNotEmpty()
  direccion: string;
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  telefono: number;

}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto){

}
