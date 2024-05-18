import { Module } from '@nestjs/common';
import { OperadoresController } from './controllers/operadores.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { OperadoresService } from './services/operadores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operador } from './entites/operador.entity';

@Module({
  imports: [ProductosModule, TypeOrmModule.forFeature([Operador])],
  controllers: [OperadoresController],
  providers: [OperadoresService],
})
export class OperadoresModule {}
