import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('fabricantes')
export class FabricantesController {
  @Get()
  getCompradores(): string {
    return 'Lista de fabricantes';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'Fabricante with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':idFabricante')
  updateComprador(
    @Param('idFabricante') idFabricante: string,
    @Body() body: any,
  ): any {
    return {
      idFabricante: idFabricante,
      nombre: body.nombre,
    };
  }
  @Delete(':idFabricante')
  deleteProducto(@Param('idFabricante') idFabricante: string): any {
    return {
      idFabricante: idFabricante,
      delete: true,
      count: 1,
    };
  }
}
