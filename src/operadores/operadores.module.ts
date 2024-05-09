import { Module } from '@nestjs/common';
import { OperadoresController } from './controllers/operadores.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { OperadoresService } from './services/operadores.service';

@Module({
  imports: [ProductosModule],
  controllers: [OperadoresController],
  providers: [OperadoresService],
})
export class OperadoresModule {}
