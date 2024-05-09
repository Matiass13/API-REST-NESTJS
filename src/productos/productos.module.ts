import { Module } from '@nestjs/common';
import { ProductosController } from 'src/productos/controllers/productos.controller';
import { ProductoService } from 'src/productos/services/producto.service';
import { CategoriasController } from './controllers/categorias.controller';
import { FabricantesController } from './controllers/fabricantes.controller';

@Module({
  controllers: [
    ProductosController,
    CategoriasController,
    FabricantesController,
  ],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductosModule {}
