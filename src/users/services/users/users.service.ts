import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserParams } from 'src/utils/types';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    findUsers(){}

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails, 
            created_at: new Date(),
        });
        return this.userRepository.save(newUser);
    }
}
