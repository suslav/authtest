import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from 'src/entity/users.entity';
import { UserTypes } from '../entity/userstype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users,UserTypes])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
