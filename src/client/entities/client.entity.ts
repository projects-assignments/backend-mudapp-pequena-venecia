import { Service } from 'src/service/entities/service.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  // JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Client {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  client_id: number;

  @OneToOne(() => User, (user) => user.client)
  // @JoinColumn()
  user_user_id: User;

  @OneToMany(() => Service, (service: Service) => service.user)
  service: Service[];
}
