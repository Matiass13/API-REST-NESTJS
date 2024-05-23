import { /* Inject, */ Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperatorDTO, UpdateOperatorDTO } from '../dtos/operadores.dto';
import { Operador } from '../entites/operador.entity';
import { ConfigService } from '@nestjs/config';
import { ProductoService } from 'src/productos/services/producto.service';
/* import { Client } from 'pg'; */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompradoresService } from './compradores.service';
//import { Pedido } from '../entites/pedido.entity';

@Injectable()
export class OperadoresService {
  constructor(
    private productsService: ProductoService,
    private configService: ConfigService, // Inyección de dependencias de ConfigService
    /* @Inject('PG') private clientPg: Client, */
    @InjectRepository(Operador) private operadorRepo: Repository<Operador>,
    private compradorService: CompradoresService,
  ) {}
  /* private idCount = 1;
  private operadores: Operador[] = [
    {
      id: 1,
      email: 'agueromatias664@gmail.com',
      password: '123456',
      role: 'role',
    },
  ]; */
  async findAll() {
    return await this.operadorRepo.find({
      relations: ['comprador'],
    });
  }
  async findOne(id: number) {
    const item = await this.operadorRepo.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }
  async create(data: CreateOperatorDTO) {
    const newItem = this.operadorRepo.create(data);
    if (data.compradorId) {
      const comprador = await this.compradorService.findOne(data.compradorId);
      newItem.comprador = comprador;
    }
    return this.operadorRepo.save(newItem);
  }

  async update(id: number, changes: UpdateOperatorDTO) {
    const item = await this.findOne(id);
    const updOperad = this.operadorRepo.merge(item, changes);
    return this.operadorRepo.save(updOperad);
  }

  remove(id: number) {
    return this.operadorRepo.delete(id);
  }

  /*  async getOrderByUser(id: number): Promise<Pedido> {
    const operador = await this.findOne(id); // findOneBy({ id })
    return {
      date: new Date(),
      operador,
      products: await this.productsService.findAll(),
    };
  } */
}
