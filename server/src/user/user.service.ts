import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from './dto';
import { FindUserInput } from './inputs/user.input';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @InjectModel(User.email) private UserModel: Model<User>,
  ) {}

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

  async findAll(user: FindUserInput): Promise<user> {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
