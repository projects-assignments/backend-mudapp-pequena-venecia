import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class vehicle {
    @PrimaryColumn()
    vehicle_id: number;

    @Column()
    vehicle_plate: string;

    @Column()
    vehicle_brand: string;

    @Column()
    vehicle_model: string;

    @Column()
    carrier_carrier_id: number;
}

