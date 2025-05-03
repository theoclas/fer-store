import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CustomersService}from './../services/customers.service';
import {CreateCustomerDto, UpdateCustomerDto} from './../dtos/Customers.dto';

@Controller('customers')
export class CustomersController {

  constructor(private CustomersService: CustomersService){}

  @Get()
  GetCustomers(){
    return this.CustomersService.findAll();
  }

  @Get('/:id')
  GetOne(@Param('documento') documento:string){
    return this.CustomersService.findOne(documento);
  }

  @Post()
  Update(@Param('documento') documento: string, @Body() payload: UpdateCustomerDto){
    return this.CustomersService.update(documento, payload);
  }

  @Delete('/:documento')
  Delete(@Param('documento') documento: string){
    return this.CustomersService.remove(documento);
  }


}
