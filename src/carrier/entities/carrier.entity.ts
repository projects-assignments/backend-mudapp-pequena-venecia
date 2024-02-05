// import { User } from "src/user/entities/user.entity";
import { Rating } from 'src/rating/entities/rating.entity';
import { Service } from 'src/service/entities/service.entity';
// import { User } from 'src/user/entities/user.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  // OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Carrier {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  carrier_id: number;

  @Column({ default: true })
  availability: boolean;

  @Column()
  location: string;

  @Column()
  car_rate: number;

  @Column()
  van_rate: number;

  @OneToMany(() => Rating, (rating) => rating.carrier)
  @JoinColumn()
  average_rating: Rating[];

  // @OneToOne(() => User, (user) => user.carrier)
  // @JoinColumn()
  // user_user_id: User;

  @Column()
  user_user_id: number;

  @OneToMany(() => Service, (service: Service) => service.carrier)
  service: Service[];

  @OneToMany(() => Vehicle, (vehicle: Vehicle) => vehicle.carrier)
  vehicle: Vehicle[];
}
