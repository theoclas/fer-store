import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty()
  // readonly documento: string;
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly edad: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
