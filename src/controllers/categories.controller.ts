import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productid')
  Getcategory(@Param('productid') productid: string, @Param('id') id: string) {
    return `Productos ${productid} and ${id}`;
  }
}
