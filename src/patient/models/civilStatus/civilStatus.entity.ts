import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('civil_status')
export class CivilStatusEntity {
    @PrimaryColumn({ name: "civil_status_id" })
    civilStatusId: string;

    @Column({ default: null, name: "civil_status" })
    civilStatus: string;

    @Column({ default: null, name: "civil_description" })
    civilDescription: string;
}