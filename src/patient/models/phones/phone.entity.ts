import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('phones')
export class PhoneEntity {
    @PrimaryColumn({ name: "phone_id" })
    phoneId: string;

    @Column({ default: null, name: "phone_type" })
    phoneType: string;
}