import {
  IsInt,
  IsDateString,
  IsOptional,
  Min,
  Max,
  IsString,
  MaxLength,
  IsEnum,
} from 'class-validator';

export class CreateReservaDto {
  @IsInt({ message: 'El idCliente debe ser un número entero' })
  idCliente: number;

  @IsInt({ message: 'El idMesa debe ser un número entero' })
  idMesa: number;

  @IsDateString({}, { message: 'La fechaReserva debe tener formato válido (YYYY-MM-DD)' })
  fechaReserva: string;

  @IsInt({ message: 'La cantidad de personas debe ser un número' })
  @Min(1, { message: 'Debe haber al menos 1 persona' })
  @Max(20, { message: 'No pueden ser más de 20 personas' })
  cantidadPersonas: number;

  @IsOptional()
  @IsEnum(['pendiente', 'confirmada', 'cancelada'], {
    message: 'El estado debe ser pendiente, confirmada o cancelada',
  })
  estado?: 'pendiente' | 'confirmada' | 'cancelada';

  /*@IsOptional()
  @IsString({ message: 'Las observaciones deben ser un texto' })
  @MaxLength(50, { message: 'Las observaciones no pueden superar 50 caracteres' })
  observaciones?: string;*/
}
