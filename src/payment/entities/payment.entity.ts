import { Service } from 'src/service/entities/service.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({name:"payment"})
export class Payment {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  payment_id: number;

  @Column()
  payment_type: string;

  @Column()
  payment_status: string;

  @OneToOne(() => Service, (service) => service.payment)
  @JoinColumn()
  service_service_id: Service;
}
