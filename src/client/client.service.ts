import { Injectable } from '@nestjs/common';
// import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async updateClient(user_id: number, user: UpdateClientDto) {
    const result = await this.userRepository.update( user_id, user);
    console.log(result)
    if (result) return { message: 'updated OK' };
  
  }
  
}
