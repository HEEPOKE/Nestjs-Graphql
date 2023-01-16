import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';

@Controller('api/product')
export class ProductController {
  constructor(config: ConfigService, private productService: ProductService) {}

  @Get('getAll')
  findAll() {
    return this.productService.findAll();
  }

  @Get('get/:id')
  async getProductById(@Param('id') productId: string) {
    const getProductById = await this.productService.getProductById(productId);

    if (!getProductById) {
      return new NotFoundException(`userId ${productId} not found product`);
    }
    return getProductById;
  }

  @Post('add')
  createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch('update/:id')
  updateProductById(
    @Param('id') productId: string,
    @Body() dto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(productId, dto);
  }

  @Delete('delete/:id')
  deleteProductById(@Param('id') productId: string) {
    return this.productService.deleteProductById(productId);
  }
}
