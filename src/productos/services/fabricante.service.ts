import { Injectable, NotFoundException } from '@nestjs/common';
import { Fabricante } from '../entities/fabricante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateFabricanteDTO,
  UpdateFabricanteDTO,
} from '../dtos/fabricante.dto';

@Injectable()
export class FabricanteService {
  constructor(
    @InjectRepository(Fabricante)
    private fabricanteRepo: Repository<Fabricante>,
  ) {}

  async findAll() {
    return await this.fabricanteRepo.find({
      relations: ['productos'],
    });
  }
  async findOne(id: number) {
    const fabricante = await this.fabricanteRepo.findOneBy({ id });
    if (!fabricante) {
      throw new NotFoundException(`fabricante #${id} not found`);
    }
    return fabricante;
  }
  create(data: CreateFabricanteDTO) {
    const newfabricante = this.fabricanteRepo.create(data);
    return this.fabricanteRepo.save(newfabricante);
  }
  async update(id: number, changes: UpdateFabricanteDTO) {
    const fabricante = await this.fabricanteRepo.findOneBy({ id });
    this.fabricanteRepo.merge(fabricante, changes);
    return this.fabricanteRepo.save(fabricante);
  }

  remove(id: number) {
    return this.fabricanteRepo.delete(id);
  }
}
