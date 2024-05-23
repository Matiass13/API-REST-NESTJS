import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  //ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OperadoresService } from '../services/operadores.service';
import { CreateOperatorDTO, UpdateOperatorDTO } from '../dtos/operadores.dto';

@Controller('operadores')
export class OperadoresController {
  constructor(private operatorService: OperadoresService) {}
  @Get()
  getOperators() {
    return this.operatorService.findAll();
  }
  /* @Get(':id/pedidos')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.operatorService.getOrderByUser(id);
  } */
  @Post()
  create(@Body() payload: CreateOperatorDTO) {
    return this.operatorService.create(payload);
  }
  @Put(':idProduct')
  updateProduct(
    @Param('idProduct') idProduct: string,
    @Body() payload: UpdateOperatorDTO,
  ) {
    return this.operatorService.update(+idProduct, payload);
  }
  @Delete(':idoperator')
  deleteoperator(@Param('idoperator') idoperator: number) {
    return this.operatorService.remove(idoperator);
  }
  /* @Get('tasks') //
  getTasks() {
    return this.operatorService.getTasks();
  } */
}
