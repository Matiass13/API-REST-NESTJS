import { Injectable, NotFoundException } from '@nestjs/common';
import { Comprador } from '../entites/comprador.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateCompradorDTO,
  UpdateCompradorDTO,
} from '../dtos/compradores.dto';

@Injectable()
export class CompradoresService {
  constructor(
    // private configService: ConfigService, // Inyección de dependencias de ConfigService
    /* @Inject('PG') private clientPg: Client, */
    @InjectRepository(Comprador) private compradorRepo: Repository<Comprador>,
  ) {}
  /* private idCount = 1;
      private compradores: comprador[] = [
        {
          id: 1,
          email: 'agueromatias664@gmail.com',
          password: '123456',
          role: 'role',
        },
      ]; */
  async findAll() {
    return await this.compradorRepo.find();
  }
  async findOne(id: number) {
    const item = await this.compradorRepo.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }
  create(data: CreateCompradorDTO) {
    const newItem = this.compradorRepo.create(data);
    return this.compradorRepo.save(newItem);
  }

  async update(id: number, changes: UpdateCompradorDTO) {
    const item = await this.findOne(id);
    this.compradorRepo.merge(item, changes);
    return this.compradorRepo.save(item);
  }

  remove(id: number) {
    return this.compradorRepo.delete(id);
  }
}
