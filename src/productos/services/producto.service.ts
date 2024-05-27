import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/productos.dto';
import { Producto } from 'src/productos/entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FabricanteService } from './fabricante.service';

@Injectable()
export class ProductoService {
  constructor(
    private fabricanteService: FabricanteService,
    @InjectRepository(Producto) private productRepo: Repository<Producto>,
  ) {}

  async findAll() {
    return await this.productRepo.find({
      relations: ['fabricante'],
    });
  }
  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  async create(data: CreateProductDTO) {
    const newItem = this.productRepo.create(data);
    if (data.fabricanteId) {
      const fabricante = await this.fabricanteService.findOne(
        data.fabricanteId,
      );
      newItem.fabricante = fabricante;
    }
    return this.productRepo.save(newItem);
  }
  async update(id: number, changes: UpdateProductDTO) {
    const product = await this.productRepo.findOneBy({ id });
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
