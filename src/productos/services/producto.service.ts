import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/productos.dto';
import { Producto } from 'src/productos/entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto) private productRepo: Repository<Producto>,
  ) {}
  /* private idCount = 1;
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto A',
      descripcion: 'descripcion produc A',
      precio: 20,
      stock: 1,
      origen: 'China',
      imagen: '',
    },
  ]; */
  findAll() {
    return this.productRepo.find();
  }
  findOne(id: number) {
    const product = this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(data: CreateProductDTO) {
    // const newProduct = new Product();
    // newProduct.image = data.image;
    // newProduct.name = data.name;
    // newProduct.description = data.description;
    // newProduct.price = data.price;
    // newProduct.stock = data.stock;
    // newProduct.image = data.image;
    const newProduct = this.productRepo.create(data);
    return this.productRepo.save(newProduct);
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
