import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice:UsersService){}
    @Get('getlist')
    @UseGuards(AuthGuard())
    findAll(){
        const users=this.userservice.getAll();
        return users;
    }
}
