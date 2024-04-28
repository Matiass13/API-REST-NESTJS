import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/productos.dto';
import { ProductoService } from 'src/service/producto.service';

@Controller('productos')
export class ProductosController {
  constructor(private productsService: ProductoService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = '',
  ) {
    return this.productsService.findAll();
  }
  @Get(':idProduct')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductById(@Param('idProduct', ParseIntPipe) idProduct: number) {
    return this.productsService.findOne(idProduct);
  }
  @Post()
  create(@Body() payload: CreateProductDTO) {
    return this.productsService.create(payload);
  }
  @Put(':idProduct')
  updateProduct(
    @Param('idProduct') idProduct: string,
    @Body() payload: UpdateProductDTO,
  ) {
    return this.productsService.update(+idProduct, payload);
  }
  @Delete(':idProducto')
  deleteProducto(@Param('idProducto') idProducto: string): any {
    return {
      idProducto: idProducto,
      delete: true,
      count: 1,
    };
  }
}
