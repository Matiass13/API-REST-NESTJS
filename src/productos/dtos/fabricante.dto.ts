import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class CreateFabricanteDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string; //solo lectura
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly direccion: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateFabricanteDTO extends PartialType(
  OmitType(CreateFabricanteDTO, []),
) {}
