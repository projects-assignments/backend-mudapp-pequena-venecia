import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    user_lastname: string;

    @Column()
    user_password: string;

    @Column()
    user_rol: string;

    @Column()
    user_email: string;
}
