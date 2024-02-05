import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import { SearchServiceDto } from './dto/searchService.dto';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAvailableCarrier(@Body() searchService: SearchServiceDto){
  return this.serviceService.findAvailableCarrier(searchService);
  }

  @Post()
  createService(@Body() createService: CreateServiceDto){
  return this.serviceService.createService(createService);
  }

  @Get(':clientId')
  listServices(@Param('clientId') clientId: number){
    return this.serviceService.listServices(clientId);
  }

  @Put(':serviceId')
  cancelServcice(@Param('serviceId') serviceId: number){
    return this.serviceService.cancelService(serviceId);
  }

}
