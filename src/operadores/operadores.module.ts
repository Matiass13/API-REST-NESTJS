import { Module } from '@nestjs/common';
import { OperadoresController } from './controllers/operadores.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { OperadoresService } from './services/operadores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operador } from './entites/operador.entity';
import { CompradoresService } from './services/compradores.service';
import { Comprador } from './entites/comprador.entity';
import { CompradoresController } from './controllers/compradores.controller';

@Module({
  imports: [ProductosModule, TypeOrmModule.forFeature([Operador, Comprador])],
  controllers: [OperadoresController, CompradoresController],
  providers: [OperadoresService, CompradoresService],
})
export class OperadoresModule {}
