import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  id: number;

  @Column({ type: 'text', nullable: true })
  preferencias?: string;
}