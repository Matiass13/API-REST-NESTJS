import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Operador } from './operador.entity';

@Entity()
export class Comprador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  apellido: string;

  @Column({ type: 'varchar', length: 255 })
  telefono: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToOne(() => Operador, (operador) => operador.comprador, {
    nullable: true,
  })
  operador: Operador;
}
