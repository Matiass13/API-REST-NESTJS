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
import { CreateProductDTO, UpdateProductDTO } from '../dtos/productos.dto';
import { ProductoService } from 'src/productos/services/producto.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private productsService: ProductoService) {}
  @Get()
  @ApiOperation({ summary: 'Catalogo con todos los productos' })
  getProducts(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('limit') _limit = 100,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('offset') _offset = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('brand') _brand = '',
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
