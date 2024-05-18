import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Operador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;
  @Column({ type: 'varchar' })
  password: string;
  @Column({ type: 'varchar' })
  role: string;
}
