import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {}

  async createUser(userDetails: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...userDetails,
      created_at: new Date(),
    });
    return await this.userRepository.save(newUser);
  }
}