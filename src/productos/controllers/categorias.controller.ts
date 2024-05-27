import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriaService } from '../services/categoria.service';
import { CreateCategoriaDTO, UpdateCategoriaDTO } from '../dtos/categoria.dto';

@ApiTags('Categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasservice: CategoriaService) {}
  @Get()
  @ApiOperation({ summary: 'Catalogo con todas las categorias' })
  getCategorias() {
    return this.categoriasservice.findAll();
  }
  @Get(':id')
  getCatById(@Param('idCat', ParseIntPipe) idCat: number) {
    return this.categoriasservice.findOne(idCat);
  }
  @Post()
  create(@Body() payload: CreateCategoriaDTO) {
    return this.categoriasservice.create(payload);
  }
  @Put(':idCategoria')
  updateCategoria(
    @Param('idCategoria') idCategoria: number,
    @Body() payload: UpdateCategoriaDTO,
  ) {
    return this.categoriasservice.update(+idCategoria, payload);
  }
  @Delete(':idCategoria')
  deleteProducto(@Param('idCategoria') idCategoria: number) {
    return this.categoriasservice.remove(idCategoria);
  }
}
