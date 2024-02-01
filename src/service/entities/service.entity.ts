import { Carrier } from 'src/carrier/entities/carrier.entity';
import { Client } from 'src/client/entities/client.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Rating } from 'src/rating/entities/rating.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  service_id: number;

  @Column()
  package_size: string;

  @Column()
  origin: string;

  @Column()
  destination: number;

  @Column()
  date_time: Date;

  @Column()
  service_status: string;

  @ManyToOne(() => Carrier, (carrier: Carrier) => carrier.service)
  carrier_carrier_id: Carrier;

  @ManyToOne(() => Client, (client: Client) => client.service)
  client_client_id: Client;

  @OneToOne(() => Payment, (payment) => payment.service)
  payment: Payment;

  @OneToOne(() => Rating, (rating: Rating) => rating.service)
  rating_rating_id: Rating;
}
