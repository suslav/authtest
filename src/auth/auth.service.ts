import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entity/users.entity';
import { Repository, getConnection } from 'typeorm';
import { UserTypes } from '../entity/userstype.entity';
import { UsersDo } from '../models/users-do.interface';
import { LoginuserDo } from '../models/loginuser.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              @InjectRepository(Users) private readonly userstab: Repository<Users>,
              @InjectRepository(UserTypes) private readonly usertypestab: Repository<UserTypes>) { }

  async createUser(dataObj: UsersDo) {
    const checkUserExistence = await this.getByEmail(dataObj.email);
    if (checkUserExistence) {
      throw new NotAcceptableException(
        'Another user with provided email already exists.',
      );
    }
    const usertypes = new UserTypes();
    usertypes.userTypeId = dataObj.usertypes[0].userTypeId;
    await getConnection().manager.save(usertypes);
    const newUser = new Users();
    newUser.userName = dataObj.userName;
    newUser.passwords = dataObj.passwords;
    newUser.email = dataObj.email;
    newUser.usertypes = [usertypes];
    return await getConnection().manager.save(newUser);

  }
  async getByEmail(email: string){
    return await this.userstab.findOne({ email });
  }
  async generateToken(dataObj) {
    return {
      expiresIn: 3600,
      accessToken: this.jwtService.sign({ dataObj }),
    };
  }
  async login(payloads: LoginuserDo) {
    const user = await this.userstab.findOne(payloads);
    if (!user) {
      throw new UnauthorizedException('Wrong email or password !');
    }
    return user;
  }
  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
