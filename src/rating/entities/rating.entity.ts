import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Rating {
    @PrimaryColumn()
    rating_id: number;

    @Column()
    carrier_carrier_id:number;

    @Column()
    rating_review:string;

    @Column()
    rating_grade:number;

    @Column()
    service_service_id:number;

}