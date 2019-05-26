import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from 'src/entity/users.entity';
import { UserTypes } from '../entity/userstype.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Users,UserTypes]), PassportModule.register({ defaultStrategy: 'jwt', session: false })],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
