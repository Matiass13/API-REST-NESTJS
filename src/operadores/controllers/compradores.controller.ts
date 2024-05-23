import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CompradoresService } from '../services/compradores.service';
import {
  CreateCompradorDTO,
  UpdateCompradorDTO,
} from '../dtos/compradores.dto';

@Controller('compradores')
export class CompradoresController {
  constructor(private compradorService: CompradoresService) {}

  @Get()
  getCompradores() {
    return this.compradorService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.compradorService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateCompradorDTO) {
    return this.compradorService.create(payload);
  }
  @Put(':idProduct')
  updateProduct(
    @Param('idProduct') idProduct: string,
    @Body() payload: UpdateCompradorDTO,
  ) {
    return this.compradorService.update(+idProduct, payload);
  }
  @Delete(':idComprador')
  deleteComprador(@Param('idComprador') idComprador: number) {
    return this.compradorService.remove(idComprador);
  }
}
