import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('compradores')
export class CompradoresController {
  @Get()
  getCompradores(): string {
    return 'Lista de compradores';
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'User with ID: ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
}
