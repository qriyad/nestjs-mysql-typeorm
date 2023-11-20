import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('Received DTO:', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}