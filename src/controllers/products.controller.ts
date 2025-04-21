import {
  Controller,
  Get,
  Param,
  // Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // Res,
  // ParseIntPipe,
} from '@nestjs/common';

// import { Response } from 'express';
import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/Products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  GetProducts() {
    // GetProducts(
    //   @Query('limit') limit?: 100,
    //   @Query('offset') offset?: 0,
    //   @Query('brand') brand?: string,
    // ) {
    // return {
    //   message: ` product limit => ${limit}  offset => ${offset} brand => ${brand}`,
    // };

    return this.productsService.findAll();
  }

  @Get('/filter')
  getProductFilter() {
    return 'Yo soy un filtro';
  }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  GetOne(@Param('id', ParseIntPipe) id: number) {
    // GetOne(@Res() response: Response, @Param('id') id: string) {
    // response.status(200).send({
    //   message: `Productos ${id}`,
    // });
    // // return {
    // //   message: `Productos ${id}`,
    // // };
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() paylod: CreateProductDto) {
    // return {
    //   message: 'Accion de crear',
    //   paylod,
    // };

    return this.productsService.create(paylod);
  }

  @Put('/:id')
  Update(@Param('id') id: string, @Body() paylod: UpdateProductDto) {
    // return {
    //   id,
    //   paylod,
    // };
    return this.productsService.update(+id, paylod);
  }

  @Delete(':id')
  Delecte(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
