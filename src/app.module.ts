import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricantesController } from './controllers/fabricantes.controller';
import { CompradoresController } from './controllers/compradores.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { PedidosController } from './controllers/pedidos.controller';
import { ProductosModule } from './modules/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [
    AppController,
    FabricantesController,
    CompradoresController,
    CategoriasController,
    PedidosController,
  ],
  providers: [AppService],
})
export class AppModule {}
