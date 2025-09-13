import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly svc: ClientesService) {}

  @Post()
  crear(@Body() dto: { preferencias?: string }) {
    return this.svc.crear(dto);
  }

  @Get()
  listar() {
    return this.svc.listar();
  }
}