import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { CarrierModule } from './carrier/carrier.module';
import { ServiceModule } from './service/service.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
      host: 'sql11.freesqldatabase.com',
      port: 3306,
      database: 'sql11680539',
      username: 'sql11680539',
      password: '343XmK8pZR',
    }),
    UserModule,
    ClientModule,
    CarrierModule,
    ServiceModule,
    VehicleModule,
    PaymentModule, //Faltaba el modulo payment
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
