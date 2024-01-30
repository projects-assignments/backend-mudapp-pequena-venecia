import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
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

    @Column({ unique: true})
    @IsNotEmpty()
    @IsEmail()
    user_email: string;
}
