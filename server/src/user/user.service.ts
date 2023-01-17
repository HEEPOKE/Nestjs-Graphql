import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from './dto';
import { FindUserInput } from './inputs/user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.create({
      data: {
        ...createUserInput,
      },
    });
    const data = {
      message: 'success',
      status: 'success',
      data: user,
    };
    return data;
  }
  async findAll() {
    return `This action returns all user`;
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
