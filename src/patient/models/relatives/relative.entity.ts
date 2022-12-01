import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Relationship } from "../relationship.enum";

@Entity('relatives')
export class RelativeEntity {
    @PrimaryGeneratedColumn("uuid", { name: "relative_id" })
    relativeId: string;

    @Column({ default: null, name: "patient_id" })
    patientId: string;

    @Column({ default: null, name: "relative_name" })
    relativeName: string;

    @Column({ default: null, name: "relative_first_last_name" })
    relativeFirstLastName: string;

    @Column({ default: null, name: "relative_second_last_name" })
    relativeSecondLastName: string;

    @Column({ type: 'date', default: null, name: "relative_date_of_birth" })
    relativeDateOfBirth: Date;

    @Column({ default: null, name: "instruction" })
    instruction: string;

    @Column({ default: null, name: "relative_occupation" })
    relativeOccupation: string;

    @Column({ default: null, name: "relative_civil_status" })
    civilStatus: string;

    @Column({ default: null, name: "relationship" })
    relationship: string;

    @Column({ default: null, name: "observations" })
    observations: string;
}
