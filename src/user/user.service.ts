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

create (CreateUserDto: CreateUserDto){
  return this.userRepository.save(CreateUserDto);
}

//COMO VIAJA LA INFORMACIÓN A TRAVÉS DEL OBJETO Y SI CUMPLE LOS PARAMETROS //

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { user_email: email } });
  }
  //La accioón o metodo findonebyemail me va aretornar si extiste el usuario o no en la DV//

  findAll() {
    return `This action returns all user`;
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

// antigua forma de create:

 // async createUser(userData: CreateUserDto): Promise<User> {
  //   try {
  //     const newUser = this.userRepository.create(userData);
  //     return await this.userRepository.save(newUser);
  //   } catch (error) {
  //     throw new Error('Error al crear el usuario');
  //   }
  // }


//   async findAll(): Promise<User[]> {
//     return await this.userRepository.find();
//   }

//   async findOne(id: number): Promise<User> {
//     return await this.userRepository.findOne(id);
//   }

//   async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
//     const user = await this.userRepository.findOne(id);
//     if (!user) {
//       throw new Error(`No se encontró un usuario con el ID ${id}`);
//     }
//     this.userRepository.merge(user, updateUserDto);
//     return await this.userRepository.save(user);
//   }

//   async remove(id: number): Promise<void> {
//     const user = await this.userRepository.findOne(id);
//     if (!user) {
//       throw new Error(`No se encontró un usuario con el ID ${id}`);
//     }
//     await this.userRepository.remove(user);
//   }
//  }


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



