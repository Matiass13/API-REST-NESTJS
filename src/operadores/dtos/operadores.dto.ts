import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateOperatorDTO {
  @IsString()
  @IsNotEmpty()
  readonly email: string; //solo lectura

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
export class UpdateOperatorDTO extends PartialType(
  OmitType(CreateOperatorDTO, []),
) {}
