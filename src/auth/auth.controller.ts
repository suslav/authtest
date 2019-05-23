import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { getMetadataArgsStorage } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token')
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    console.log('called');
    // this route is restricted by AuthGuard
    // JWT strategy
  }
  @Get('sample')
  getData(){
    console.log('called');
  }
}
