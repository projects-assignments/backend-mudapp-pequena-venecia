import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Carrier } from 'src/carrier/entities/carrier.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { SearchServiceDto } from './dto/searchService.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Carrier)
        private carrierRepository: Repository<Carrier>,
        @InjectRepository(Service)
        private serviceRepository: Repository<Service>,
        @InjectDataSource()
        private dataSource: DataSource,
    ) {} 

async findAvailableCarrier (searchService: SearchServiceDto) {
    const availableCarrier = await this.carrierRepository.find({ 
        where: { location: searchService.destination, availability: true }
    });
        console.log(availableCarrier);
        
    if (availableCarrier) {
        const carrierDetails = []
        for (let i=0; i < availableCarrier.length; i++){
            const element = await this.userRepository.find({
                select: { user_name: true, user_lastname: true },
                where: { user_id: availableCarrier[i].user_user_id }
            })
        carrierDetails.push(element)
        }
        return carrierDetails
    } else {
        throw new HttpException(`No Carrier available at the moment`, 404);
    }
}

async createService (createService: CreateServiceDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        const availableCarrier = await queryRunner.manager.findOne(Carrier, {
            where: { carrier_id: createService.carrier_carrier_id, availability: true },
        });

        if (!availableCarrier) {
            throw new HttpException(`Carrier is not available`, 404);
        }

        const service = await queryRunner.manager.save(Service, createService);

        availableCarrier.availability = false;
        await queryRunner.manager.save(Carrier, availableCarrier);

        await queryRunner.commitTransaction();

        const carrierDetails = await queryRunner.manager.findOne(User, {
            where: { user_id: availableCarrier.user_user_id }
        })
        // console.log(carrierDetails)

        console.log(service)
        return `booking sucessfull with date of ${service.date_time} and your carrier is ${carrierDetails.user_name} ${carrierDetails.user_lastname}`;
        } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
        } finally {
        await queryRunner.release();
        }
        }

async listServices (clientId: number){
    const myServices = await this.serviceRepository.find({ 
        where: { client_client_id: clientId }
    });

    console.log(myServices)

    if(myServices){
        return this.serviceRepository.find({
            select: { 
                package_size: true, 
                origin: true, 
                destination: true, 
                date_time:true,
                service_status: true,
            },
            where: {client_client_id: clientId}
        })
    } else { // devuelve un array vacio y no el error ¿POR QUE?
        throw new HttpException(`No Services found`, 404); 
    }
}

async cancelService(serviceId: number){
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try{
        const service = await queryRunner.manager.findOne(Service, {
            where: { service_id: serviceId }
        })

        if(!service){
            throw new HttpException(`Not service found`, 404);
        }

        if(service.service_status == "confirmed"){
            throw new HttpException(`This service had been paid already and can not be canceled`, 400);
        }

        service.service_status = "canceled";
        await queryRunner.manager.save(Service, service);
        
        await queryRunner.commitTransaction();

        console.log(service)
        return `service canceled`
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
}

}
