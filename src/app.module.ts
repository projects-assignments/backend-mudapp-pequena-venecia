import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { CarrierModule } from './carrier/carrier.module';
import { ServiceModule } from './service/service.module';
import { VehicleModule } from './vehicle/vehicle.module';
import config from './config/config';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
    }),
    UserModule,
    ClientModule,
    CarrierModule,
    ServiceModule,
    VehicleModule,
  PaymentModule], //Faltaba el modulo payment
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
