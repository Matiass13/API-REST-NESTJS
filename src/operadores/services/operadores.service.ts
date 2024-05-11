import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperatorDTO, UpdateOperatorDTO } from '../dtos/operadores.dto';
import { Operador } from '../entites/operador.entity';
import { ConfigService } from '@nestjs/config';
import { ProductoService } from 'src/productos/services/producto.service';
import { Pedido } from '../entites/pedido.entity';
import { Client } from 'pg';

@Injectable()
export class OperadoresService {
  constructor(
    private productsService: ProductoService,
    private configService: ConfigService, // Inyección de dependencias de ConfigService
    @Inject('PG') private clientPg: Client,
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
    const apiKey = this.configService.get('API_KEY'); // Asignacion de la variable de entorno a una constante
    const dbName = this.configService.get('DATABASE_NAME'); // idem
    console.log(apiKey, dbName);
    return this.operadores;
  }
  findOne(id: number) {
    const operador = this.operadores.find((item) => item.id === id);
    if (!operador) {
      throw new NotFoundException(`El operador con id: #${id} no existe`);
    }
    return operador;
  }
  create(payload: CreateOperatorDTO) {
    this.idCount += 1;
    const newOperador = {
      id: this.idCount,
      ...payload,
    };
    this.operadores.push(newOperador);
    return newOperador;
  }
  update(id: number, payload: UpdateOperatorDTO) {
    let operador = this.findOne(id);
    if (operador) {
      const index = this.operadores.findIndex((item) => item === operador);
      if (index !== -1) {
        operador = {
          ...operador,
          ...payload,
        };
        this.operadores[index] = operador;
        return operador;
      }
    }
  }

  delete(id: number) {
    const index = this.operadores.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`El operador con id: #${id} no existe`);
    }
    if (index !== -1) {
      this.operadores.splice(index, 1);
    }
    return true;
  }

  getOrderByUser(id: number): Pedido {
    const operador = this.findOne(id);
    return {
      date: new Date(),
      operador,
      products: this.productsService.findAll(),
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
