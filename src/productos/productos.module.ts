import { Module } from '@nestjs/common';
import { ProductosController } from 'src/productos/controllers/productos.controller';
import { ProductoService } from 'src/productos/services/producto.service';
import { CategoriasController } from './controllers/categorias.controller';
import { FabricantesController } from './controllers/fabricantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Fabricante } from './entities/fabricante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Fabricante])],
  controllers: [
    ProductosController,
    CategoriasController,
    FabricantesController,
  ],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductosModule {}
