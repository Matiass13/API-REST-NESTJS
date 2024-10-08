import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
export class CreateProductDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string; //solo lectura
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly precio: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly origen: string;
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly fabricanteId: number;
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  readonly categoriasIds: number[];
}
export class UpdateProductDTO extends PartialType(
  OmitType(CreateProductDTO, []),
) {}
