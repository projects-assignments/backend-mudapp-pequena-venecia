import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Carrier } from 'src/carrier/entities/carrier.entity';
import { Service } from './entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Carrier]), TypeOrmModule.forFeature([Service])
],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
