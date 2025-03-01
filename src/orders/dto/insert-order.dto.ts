import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class InsertOrderDto {
  @ApiProperty()
  @IsNotEmpty({ message: "L'id du produit est requis." })
  id?: number;
}
