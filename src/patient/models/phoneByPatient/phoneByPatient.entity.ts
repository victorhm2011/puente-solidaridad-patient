import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('phone_by_patient')
export class PhoneByPatientEntity {
    @PrimaryColumn("uuid", { name: "patient_id" })
    patientId: string;

    @PrimaryColumn({ name: "phone_id" })
    phoneId: string;

    @Column({ default: null, name: "patient_phone" })
    patientPhone: string;
}