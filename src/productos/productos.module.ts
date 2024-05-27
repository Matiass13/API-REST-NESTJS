import { Module } from '@nestjs/common';
import { ProductosController } from 'src/productos/controllers/productos.controller';
import { ProductoService } from 'src/productos/services/producto.service';
import { CategoriasController } from './controllers/categorias.controller';
import { FabricantesController } from './controllers/fabricantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Fabricante } from './entities/fabricante.entity';
import { FabricanteService } from './services/fabricante.service';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Fabricante, Categoria])],
  controllers: [
    ProductosController,
    CategoriasController,
    FabricantesController,
  ],
  providers: [ProductoService, FabricanteService, CategoriaService],
  exports: [ProductoService],
})
export class ProductosModule {}
