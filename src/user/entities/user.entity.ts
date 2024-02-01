import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Carrier } from 'src/carrier/entities/carrier.entity';
import { Client } from 'src/client/entities/client.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  user_lastname: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  user_password: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  user_rol: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  user_email: string;

  @OneToOne(() => Client, (client) => client.user)
  client: Client;

  @OneToOne(() => Carrier, (carrier) => carrier.user)
  carrier: Carrier;
}
