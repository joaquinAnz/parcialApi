import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mesas')
export class Mesa {
  @PrimaryGeneratedColumn({ name: 'id_mesa' })
  id: number;

  @Column()
  codigo: string;

  @Column()
  capacidad: number;

  @Column({
    type: 'enum',
    enum: ['disponible', 'ocupada', 'reservada'],
    default: 'disponible',
  })
  estado: 'disponible' | 'ocupada' | 'reservada';
}
