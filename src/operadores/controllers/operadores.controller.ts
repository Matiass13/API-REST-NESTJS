import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { OperadoresService } from '../services/operadores.service';

@Controller('operadores')
export class OperadoresController {
  constructor(private operatorService: OperadoresService) {}
  @Get()
  getOperators() {
    return this.operatorService.findAll();
  }
  @Get(':id/pedidos')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.operatorService.getOrderByUser(id);
  }
  /* @Get('tasks') //
  getTasks() {
    return this.operatorService.getTasks();
  } */
}
