import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name:"payment"})
export class Payment {
    @PrimaryColumn()
    payment_id: number;

    @Column()
    payment_type:string;

    @Column()
    payment_status:string;

    @Column()
    service_service_id:number;
}