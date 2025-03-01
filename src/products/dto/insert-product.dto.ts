import { ApiProperty } from '@nestjs/swagger';

export class InsertProductDto {
  @ApiProperty()
  id?: number;
}
