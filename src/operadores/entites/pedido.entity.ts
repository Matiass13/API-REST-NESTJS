import { Operador } from './operador.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Pedido {
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'varchar' })
  operador: Operador;
  @Column({ type: 'simple-json' })
  products: Producto[];
}
