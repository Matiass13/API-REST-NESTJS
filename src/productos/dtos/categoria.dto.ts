import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoriaDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string; //solo lectura
}
export class UpdateCategoriaDTO extends PartialType(
  OmitType(CreateCategoriaDTO, []),
) {}
