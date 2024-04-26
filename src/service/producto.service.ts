import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/productos.dto';
import { Producto } from 'src/entities/producto.entity';

@Injectable()
export class ProductoService {
  private idCount = 1;
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
  ];
  findAll() {
    return this.productos;
  }
  findOne(id: number) {
    const product = this.productos.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`El producto con id: #${id} no existe`);
    }
    return product;
  }
  create(payload: CreateProductDTO) {
    this.idCount += 1;
    const newProduct = {
      id: this.idCount,
      ...payload,
    };
    this.productos.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDTO) {
    const product = this.findOne(id);
    if (!product) {
      throw new NotFoundException(`El producto con id: #${id} no existe`);
    }
    const newProduct = {
      ...product,
      ...payload,
    };
    return newProduct;
  }

  delete(id: number) {
    const index = this.productos.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }
}
