import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { getMetadataArgsStorage } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async createToken(@Body() payload): Promise<any> {
    // tslint:disable-next-line: no-console
    console.log(payload);
    const newUser = await this.authService.createUser(payload);
    return await this.authService.generateToken(newUser);
  }

  @Post('login')
  async getlogin(@Body() payload): Promise<any> {
    // tslint:disable-next-line: no-console
    console.log(payload);
    const newUser = await this.authService.login(payload);
    return await this.authService.generateToken(newUser);
  }

  @Post('data')
  @UseGuards(AuthGuard())
  findAll(@Body() payload) {
    // tslint:disable-next-line: no-console
    console.log('called' + '' + payload);
    // this route is restricted by AuthGuard
    // JWT strategy
  }
  @Get('data')
  @UseGuards(AuthGuard())
  getall(): Promise<any> {
    return;
    // this route is restricted by AuthGuard
    // JWT strategy
  }
  @Get('sample')
  getData() {
    // tslint:disable-next-line: no-console
    console.log('called');
  }
}
