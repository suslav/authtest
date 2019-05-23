import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('getlist')
    findAll(){
        console.log('call the method');
    }
}
