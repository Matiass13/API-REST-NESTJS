import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FabricanteService } from '../services/fabricante.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from '../dtos/fabricante.dto';

@ApiTags('Fabricante')
@Controller('Fabricante')
export class FabricantesController {
  constructor(private FabricantesService: FabricanteService) {}
  @Get()
  @ApiOperation({ summary: 'Catalogo con todos los Fabricante' })
  getFabricantes(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('limit') _limit = 100,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('offset') _offset = 0,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query('brand') _brand = '',
  ) {
    return this.FabricantesService.findAll();
  }
  @Get(':idFabricante')
  @HttpCode(HttpStatus.ACCEPTED)
  getFabricanteById(@Param('idFabricante', ParseIntPipe) idFabricante: number) {
    return this.FabricantesService.findOne(idFabricante);
  }
  @Post()
  create(@Body() payload: CreateFabricanteDTO) {
    return this.FabricantesService.create(payload);
  }
  @Put(':idFabricante')
  updateFabricante(
    @Param('idFabricante') idFabricante: string,
    @Body() payload: UpdateFabricanteDTO,
  ) {
    return this.FabricantesService.update(+idFabricante, payload);
  }
  @Delete(':idFabricanteo')
  deleteFabricante(@Param('idFabricante') idFabricante: number) {
    return this.FabricantesService.remove(idFabricante);
  }
}
