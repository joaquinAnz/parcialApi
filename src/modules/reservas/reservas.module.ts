import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from '../../entities/reserva.entity';
import { Mesa } from '../../entities/mesa.entity';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Mesa])],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
