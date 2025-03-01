import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/categories/dto/category.dto';

export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  stock?: number;
  @ApiProperty({ type: CategoryDto })
  categorie?: CategoryDto;
}
