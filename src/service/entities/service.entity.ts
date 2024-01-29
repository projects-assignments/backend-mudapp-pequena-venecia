import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryColumn()
    service_id: number;

    @Column()
    package_size: string;

    @Column()
    origin: string;

    @Column()
    destination: number;

    @Column()
    date_time: Date;

    @Column()
    service_status: string;

    @Column()
    carrier_carrier_id: number;

    @Column()
    client_client_id: number;

}