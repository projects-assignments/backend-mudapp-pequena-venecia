// import { Carrier } from 'src/carrier/entities/carrier.entity';
// import { Client } from 'src/client/entities/client.entity';
// import { Payment } from 'src/payment/entities/payment.entity';
// import { Rating } from 'src/rating/entities/rating.entity';
import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  // ManyToOne,
  // OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  service_id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  package_size: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  origin: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  destination: string;

  @Column()
  @IsNotEmpty()
  date_time: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  service_status: string;

  @Column({ default: "carrier_carrier_id" })
  carrier_carrier_id: number;

  @Column({ default: "client_client_id" })
  client_client_id: number;

  // @ManyToOne(() => Carrier, (carrier: Carrier) => carrier.service)
  // carrier: Carrier;

  // @ManyToOne(() => Client, (client: Client) => client.service)
  // client: Client;

  // @OneToOne(() => Payment, (payment) => payment.service)
  // payment: Payment;

  // @OneToOne(() => Rating, (rating: Rating) => rating.service)
  // rating_rating_id: Rating;
}
