// import { User } from "src/user/entities/user.entity";
import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Client {
    @PrimaryColumn()
    client_id: number;

    @Column()
    user_user_id:number;

    // @OneToOne(() => User)
    // @JoinColumn()
    // user_user_id: User;
}