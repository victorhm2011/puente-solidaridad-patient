import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('patients')
export class PatientEntity {
    @PrimaryGeneratedColumn("uuid", { name: "patient_id" })
    patientId: string;

    @Column({ default: null, name: "patient_name" })
    patientName: string;

    @Column({ default: null, name: "patient_first_last_name" })
    patientFirstLastName: string;

    @Column({ default: null, name: "patient_second_last_name" })
    patientSecondLastName: string;

    @Column({ type: 'date', default: null, name: "patient_date_of_birth" })
    patientDateOfBirth: Date;

    @Column({ default: null, name: "gender_id" })
    genderId: string;

    @Column({ default: null, name: "patient_cellphone" })
    patientCellphone: number;

    @Column({ default: null, name: "patient_phone" })
    patientPhone: number;

    @Column({ default: null, name: "family_situation" })
    familySituation: string;

    @Column({ default: null, name: "socio_eco_situation_id" })
    socioEcoSituationId : string;

    @Column({ default: null, name: "civil_status" })
    civilStatus: string;

    @Column({ default: null, name: "medical_diagnostic" })
    medicalDiagnostic: string;

    @Column({ default: null, name: "reference" })
    reference: string;

    @Column({ type: 'date', default: null, name: "surgery_date" })
    surgeryDate: Date;

    @Column({ type: 'date', default: null, name: "hospitalization_date" })
    hospitalizationDate: Date;

    @Column({ default: null, name: "treating_physician_id" })
    treatingPhysicianId: string;

    @Column({ default: null, name: "patient_occupation" })
    patientOccupation: string;

    @Column({ default: null, name: "valuation_report_id" })
    valuationReportId: string;

    @Column({ default: null, name: "place_of_birth" })
    placeOfBirth: string;

    @Column({ default: null, name: "place_of_residence" })
    placeOfResidence: string;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}
