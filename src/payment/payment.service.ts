import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; //expone métodos para pueda conectar con BD
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.create(createPaymentDto)
  }

  findAll() {
    return this.paymentRepository.find(); //Para encontrar todos
  }

  findOne(id: number) {
    return this.paymentRepository.findOneBy({payment_id:id}); 
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentRepository.update(id, updatePaymentDto);
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
