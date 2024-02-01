import { Carrier } from 'src/carrier/entities/carrier.entity';
import { Service } from 'src/service/entities/service.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Rating {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  rating_id: number;

  @ManyToOne(() => Carrier, (carrier: Carrier) => carrier.rating)
  @JoinColumn()
  carrier_carrier_id: Carrier;

  @Column()
  rating_review: string;

  @Column()
  rating_grade: number;

  @OneToOne(() => Service, (service) => service.rating)
  @JoinColumn()
  service_service_id: Service;
}
