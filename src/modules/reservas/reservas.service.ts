import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from '../../entities/reserva.entity';

@Injectable()
export class ReservasService {
  constructor(@InjectRepository(Reserva) private repo: Repository<Reserva>) {}

  listar() {
    return this.repo.find({ relations: ['cliente', 'mesa'] });
  }

  async obtenerPorId(id: number) {
    return this.repo.findOne({
      where: { id },
      relations: ['cliente', 'mesa'],
    });
  }

  crear(data: Partial<Reserva>) {
    const nueva = this.repo.create(data);
    return this.repo.save(nueva);
  }

  async actualizar(id: number, data: Partial<Reserva>) {
    await this.repo.update(id, data);
    return this.repo.findOne({
      where: { id },
      relations: ['cliente', 'mesa'],
    });
  }

  eliminar(id: number) {
    return this.repo.delete(id);
  }
}
