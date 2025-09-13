import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly svc: ReservasService) {}

  // GET /reservas
  @Get()
  @HttpCode(HttpStatus.OK)
  async listar() {
    return this.svc.listar();
  }

  // GET /reservas/:id
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async obtenerPorId(@Param('id') id: string) {
    const reserva = await this.svc.obtenerPorId(Number(id));
    if (!reserva) {
      throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    }
    return reserva;
  }

  // POST /reservas
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async crear(@Body() dto: CreateReservaDto) {
    try {
      const nueva = await this.svc.crear({
        cliente: { id: dto.idCliente } as any,
        mesa: { id: dto.idMesa } as any,
        fechaReserva: new Date(dto.fechaReserva),
        cantidadPersonas: dto.cantidadPersonas,
        estado: dto.estado || 'pendiente',
        //observaciones: dto.observaciones, // si lo agregaste en tu DTO/entidad
      });
      return nueva;
    } catch (e) {
      console.error('❌ Error al crear reserva:', e.message);
      throw new InternalServerErrorException(
        'No se pudo crear la reserva. Verifica los datos.',
      );
    }
  }

  // PATCH /reservas/:id
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async actualizar(@Param('id') id: string, @Body() dto: UpdateReservaDto) {
    try {
      const reserva = await this.svc.actualizar(Number(id), {
        ...dto,
        fechaReserva: dto.fechaReserva ? new Date(dto.fechaReserva) : undefined,
      });

      if (!reserva) {
        throw new NotFoundException(`Reserva con id ${id} no encontrada`);
      }
      return reserva;
    } catch (e) {
      console.error('❌ Error al actualizar reserva:', e.message);
      throw new BadRequestException(
        'No se pudo actualizar la reserva. Verifica los datos.',
      );
    }
  }

  // DELETE /reservas/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async eliminar(@Param('id') id: string) {
    const result = await this.svc.eliminar(Number(id));

    if (result.affected === 0) {
      throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    }

    return; // Devuelve 204 sin body
  }
}
