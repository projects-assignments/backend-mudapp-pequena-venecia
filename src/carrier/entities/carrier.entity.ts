// import { User } from "src/user/entities/user.entity";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Carrier {
    @PrimaryColumn()
    carrier_id: number;

    @Column({default:true})
    availability: boolean;

    @Column()
    location: string;

    @Column()
    car_rate: number;

    @Column()
    van_rate: number;

    @Column()
    average_rating: number;

    @Column()
    user_user_id: number;

    // @OneToOne(() => User)
    // @JoinColumn()
    // user_user_id: User;
}
