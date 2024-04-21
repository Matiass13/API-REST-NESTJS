import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('productos')
export class ProductosController {
  @Get()
  getCompradores(): string {
    return 'Lista de productos';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'Productos with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':idProducto')
  updateComprador(
    @Param('idProducto') idProducto: string,
    @Body() body: any,
  ): any {
    return {
      idProducto: idProducto,
      nombre: body.nombre,
      precio: body.precio,
    };
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
