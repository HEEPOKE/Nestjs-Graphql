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
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('api/user')
export class UserController {
  constructor(config: ConfigService, private userService: UserService) {}

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('get/:id')
  async getUserById(@Param('id') userId: string) {
    const getUserById = await this.userService.getUserById(userId);

    if (!getUserById) {
      return new NotFoundException(`userId ${userId} not found user`);
    }
    return getUserById;
  }

  @Post('add')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Patch('update/:id')
  updateUserById(@Param('id') userId: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(userId, dto);
  }

  @Delete('delete/:id')
  deleteUserById(@Param('id') userId: string) {
    return this.userService.deleteUserById(userId);
  }
}
