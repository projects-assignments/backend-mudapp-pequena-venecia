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



  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { user_email: email } });
  }
  

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
