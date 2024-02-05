import { Carrier } from 'src/carrier/entities/carrier.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  vehicle_id: number;

  @Column()
  vehicle_plate: string;

  @Column()
  vehicle_brand: string;

  @Column()
  vehicle_model: string;

  @ManyToOne(() => Carrier, (carrier: Carrier) => carrier.user)
  @JoinColumn()
  carrier_carrier_id: Carrier;
}
