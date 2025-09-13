import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../../entities/cliente.entity';
@Injectable()
export class ClientesService {
  constructor(@InjectRepository(Cliente) private repo: Repository<Cliente>) {}

  crear(data: Partial<Cliente>) {
    return this.repo.save(this.repo.create(data));
  }

  listar() {
    return this.repo.find();   // 👈 aquí devolvemos todos los clientes
  }
}