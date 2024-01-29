import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryColumn()
    service_id: number;

    @Column()
    package_size: string;

    @Column()
    origen: string;

    @Column()
    destination: number;

    @Column()
    date_time: Date;

    @Column()
    service_status: string;
    
}