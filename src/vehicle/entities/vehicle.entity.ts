import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class vehicle {
    @PrimaryGeneratedColumn()
    vehicle_id: number;

    @Column()
    vehicle_plate: string;

    @Column()
    vehicle_brand: string;

    @Column()
    vehicle_model: string;

// FF KEY PENDIENTE 
}

