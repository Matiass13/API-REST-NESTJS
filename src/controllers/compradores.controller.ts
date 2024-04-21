import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('compradores')
export class CompradoresController {
  @Get()
  getCompradores(): string {
    return 'Lista de compradores';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'User with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':idComprador')
  updateComprador(
    @Param('idComprador') idComprador: string,
    @Body() body: any,
  ): any {
    return {
      idComprador: idComprador,
      nombre: body.nombre,
      edad: body.edad,
    };
  }
  @Delete(':idComprador')
  deleteProducto(@Param('idComprador') idComprador: string): any {
    return {
      idComprador: idComprador,
      delete: true,
      count: 1,
    };
  }
}
