import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateOperatorDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly email: string; //solo lectura

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  readonly compradorId: number;
}
export class UpdateOperatorDTO extends PartialType(
  OmitType(CreateOperatorDTO, []),
) {}
