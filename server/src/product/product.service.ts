import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const product = await this.prisma.product.findMany();

    const data = {
      message: 'success',
      status: 'success',
      data: product,
    };

    return data;
  }

  async getProductById(productId: string) {
    const product = await this.prisma.product.findFirst({
      where: {
        id: productId,
      },
    });

    const data = {
      message: 'success',
      status: 'success',
      data: product,
    };

    return data;
  }

  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
      },
    });

    const data = {
      message: 'success',
      status: 'success',
      data: product,
    };

    return data;
  }

  async updateProduct(productId: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product || product.id !== productId) {
      throw new ForbiddenException('Access to resources denied');
    } else {
      const dto = await this.prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          ...updateProductDto,
        },
      });

      const data = {
        message: 'success',
        status: 'success',
        data: dto,
      };

      return data;
    }
  }

  async deleteProductById(productId: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product || product.id !== productId) {
      throw new ForbiddenException('Access to resources denied');
    } else {
      await this.prisma.product.delete({
        where: {
          id: productId,
        },
      });

      const data = {
        message: 'success',
        status: 'success',
      };

      return data;
    }
  }
}
