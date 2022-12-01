import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('genders')
export class GenderEntity {
    @PrimaryColumn({ name: "gender_id" })
    genderId: string;

    @Column({ default: null, name: "gender_type" })
    genderType: string;
}
