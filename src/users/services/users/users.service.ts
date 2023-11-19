import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    findUsers(){}

    createUser(){
        
    }
}
