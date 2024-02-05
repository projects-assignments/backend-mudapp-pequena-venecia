import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import {JwtService } from '@nestjs/jwt' 

@Injectable()
export class AuthService {
  usersService: any;
  constructor(private readonly userService: UserService, 
    private readonly jwtService: JwtService,) {}

  async register({
    user_name,
    user_lastname,
    user_email,
    user_password,
    user_rol,
  }: RegisterDto) {
    const user = await this.userService.findOneByEmail(user_email);

    if (user!==null) {
      throw new BadRequestException('User already exist');
    }

  await this.userService.create({
      user_name,
      user_lastname,
      user_email,
      user_password: await bcrypt.hash(user_password,10),
      user_rol,
    });
    return {
        user_name, user_email,
    };
  }

  async login({user_email, user_password}: LoginDto) {
    const user = await this.userService.findOneByEmail (user_email);
    if(!user){
        throw new UnauthorizedException('email is wrong');
    }

    console.log(user_password, user.user_password)
    const isPasswordValid = await bcrypt.compare(user_password, user.user_password);
    if(!isPasswordValid){
        throw new UnauthorizedException('password is wrong')
    }

const payload = {email: user.user_email};
const token = await this.jwtService.signAsync(payload)

return {
    token, user_email,
};
  }

// async profile({ email, role }: { email: string; role: string }) {
// return await this.usersService.findOneByEmail(email);
// }
}



