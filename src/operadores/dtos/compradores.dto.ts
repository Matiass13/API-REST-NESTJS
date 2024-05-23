import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCompradorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string; //solo lectura

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly apellido: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly telefono: number;
}
export class UpdateCompradorDTO extends PartialType(
  OmitType(CreateCompradorDTO, []),
) {}
