import { Module } from '@nestjs/common';
import { ProductosController } from 'src/controllers/productos.controller';
import { ProductoService } from 'src/service/producto.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductoService],
})
export class ProductosModule {}
