import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])], //importar el modulo de TypeOrm para conectar el repositorio
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
