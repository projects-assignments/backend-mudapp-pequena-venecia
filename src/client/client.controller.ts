import { Controller, Body, Param, Put } from '@nestjs/common';
import { ClientService } from './client.service';
// import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Put(':user_id')
  updateClient(@Param('user_id') user_id: number, @Body() user: UpdateClientDto) {
    return this.clientService.updateClient(user_id, user);
  }
  
}
