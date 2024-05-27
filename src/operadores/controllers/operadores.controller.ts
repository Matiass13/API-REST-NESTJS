import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
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
  @Get(':idOperator')
  @HttpCode(HttpStatus.ACCEPTED)
  getOperatorById(@Param('idOperator', ParseIntPipe) idOperator: number) {
    return this.operatorService.findOne(idOperator);
  }
  @Post()
  create(@Body() payload: CreateOperatorDTO) {
    return this.operatorService.create(payload);
  }
  @Put(':idOperator')
  updateOperator(
    @Param('idOperator') idOperator: string,
    @Body() payload: UpdateOperatorDTO,
  ) {
    return this.operatorService.update(+idOperator, payload);
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
