import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(userData);
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new Error('Error al crear el usuario');
    }
  }
}

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   async createUser(userData: CreateUserDto): Promise<User> {
  
//     const newUser = new User();
//     newUser.user_name = userData.name;
//     newUser.user_lastname = userData.lastname;
//     newUser.user_email = userData.email;
//     newUser.user_password = userData.password;
//     newUser.user_rol = userData.rol;

//     return await this.userRepository.save(newUser);
//   }
// }





//   findAll() {
//     return `This action returns all user`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   Date(id: number, UpdateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
// function findAll() {
//   throw new Error('Function not implemented.');
// }

// function findOne(id: any, number: any) {
//   throw new Error('Function not implemented.');
// }

// function remove(id: any, number: any) {
//   throw new Error('Function not implemented.');
// }

