import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Mesa } from './mesa.entity';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn({ name: 'id_reserva' })
  id: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @ManyToOne(() => Mesa)
  @JoinColumn({ name: 'id_mesa' })
  mesa: Mesa;

  @Column({ name: 'fecha_reserva', type: 'datetime' })
  fechaReserva: Date;

  @Column({ name: 'cantidad_personas' })
  cantidadPersonas: number;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'pendiente',
  })
  estado: 'pendiente' | 'confirmada' | 'cancelada';

  //@Column({ length: 50, nullable: true })
//observaciones?: string;

}
