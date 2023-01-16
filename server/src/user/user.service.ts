import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const user = await this.prisma.user.findMany();

    const data = {
      message: 'success',
      status: 'success',
      data: user,
    };

    return data;
  }

  async getUserById(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    const data = {
      message: 'success',
      status: 'success',
      data: user,
    };

    return data;
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });

    const data = {
      message: 'success',
      status: 'success',
      data: user,
    };

    return data;
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user || user.id !== userId) {
      throw new ForbiddenException('Access to resources denied');
    } else {
      const dto = await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          ...updateUserDto,
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

  async deleteUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user || user.id !== userId) {
      throw new ForbiddenException('Access to resources denied');
    } else {
      await this.prisma.user.delete({
        where: {
          id: userId,
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
