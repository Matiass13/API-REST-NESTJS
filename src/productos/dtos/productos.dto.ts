import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
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
}
export class UpdateProductDTO extends PartialType(
  OmitType(CreateProductDTO, []),
) {}
