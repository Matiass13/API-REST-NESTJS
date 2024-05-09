import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('pedidos')
export class PedidosController {
  @Get()
  getPedidos(): string {
    return 'Lista de pedidos';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'Pedidos with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
  @Put(':idPedido')
  updatePedido(@Param('idPedido') idPedido: string): any {
    return {
      idPedido: idPedido,
    };
  }
  @Delete(':idPedido')
  deleteProducto(@Param('idPedido') idPedido: string): any {
    return {
      idPedido: idPedido,
      delete: true,
      count: 1,
    };
  }
}
