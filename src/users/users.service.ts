import { Injectable } from '@nestjs/common';
import { Users } from '../entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTypes } from '../entity/userstype.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly userstab: Repository<Users>,
                @InjectRepository(UserTypes) private readonly usertypestab: Repository<UserTypes>) {
    }
    async getAll(): Promise<any> {

        const users = await this.usertypestab.find({ relations: ['users'] });
        return users;
        
    }

}
