import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperatorDTO, UpdateOperatorDTO } from '../dtos/operadores.dto';
import { Operador } from '../entites/operador.entity';
import { ConfigService } from '@nestjs/config';
import { ProductoService } from 'src/productos/services/producto.service';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OperadoresService {
  constructor(
    private productsService: ProductoService,
    private configService: ConfigService, // Inyección de dependencias de ConfigService
    @Inject('PG') private clientPg: Client,
    @InjectRepository(Operador) private operadorRepo: Repository<Operador>,
  ) {}
  private idCount = 1;
  private operadores: Operador[] = [
    {
      id: 1,
      email: 'agueromatias664@gmail.com',
      password: '123456',
      role: 'role',
    },
  ];
  findAll() {
    return this.operadorRepo.find();
  }
  findOne(id: number) {
    const item = this.operadorRepo.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return item;
  }
  create(data: CreateOperatorDTO) {
    const newProduct = this.operadorRepo.create(data);
    return this.operadorRepo.save(newProduct);
  }

  async update(id: number, changes: UpdateOperatorDTO) {
    const item = await this.operadorRepo.findOneBy({ id });
    this.operadorRepo.merge(item, changes);
    return this.operadorRepo.save(item);
  }

  remove(id: number) {
    return this.operadorRepo.delete(id);
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id); // findOneBy({ id })
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tareas', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
