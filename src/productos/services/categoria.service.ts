import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCategoriaDTO,
  UpdateCategoriaDTO,
} from 'src/productos/dtos/categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria) private categoriaRepo: Repository<Categoria>,
  ) {}

  findAll() {
    return this.categoriaRepo.find();
  }
  async findOne(id: number) {
    const item = await this.categoriaRepo.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }
  async findByIds(id: number[]) {
    const cates: Categoria[] = [];
    for (const element of id) {
      const item = await this.categoriaRepo.findOneBy({ id: element });
      if (!item) {
        throw new NotFoundException(`Item #${id} not found`);
      }
      cates.push(item);
    }
    return cates;
  }
  create(data: CreateCategoriaDTO) {
    const newItem = this.categoriaRepo.create(data);
    return this.categoriaRepo.save(newItem);
  }

  async update(id: number, changes: UpdateCategoriaDTO) {
    const item = await this.findOne(id);
    this.categoriaRepo.merge(item, changes);
    return this.categoriaRepo.save(item);
  }

  remove(id: number) {
    return this.categoriaRepo.delete(id);
  }
}
