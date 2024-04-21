import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
  @Get()
  getCompradores(): string {
    return 'Lista de categorias';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'Categoria with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':idCategoria')
  updateComprador(
    @Param('idCategoria') idCategoria: string,
    @Body() body: any,
  ): any {
    return {
      idCategoria: idCategoria,
      nombre: body.nombre,
    };
  }
  @Delete(':idCategoria')
  deleteProducto(@Param('idCategoria') idCategoria: string): any {
    return {
      idCategoria: idCategoria,
      delete: true,
      count: 1,
    };
  }
}
