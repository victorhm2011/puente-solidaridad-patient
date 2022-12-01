import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('valuation_report')
export class ValuationReportEntity {
    @PrimaryGeneratedColumn("uuid", { name: "valuation_report_id" })
    valuationReportId: string;

    @Column({ default: null, name: "author_name" })
    authorName: string;

    @Column({ default: null, name: "social_worker" })
    socialWorker: string;

    @Column({ default: null, name: "general_references" })
    generalReferences: string;

    @Column({ default: null, name: "treatment" })
    treatment: string;

    @Column({ default: null, name: "current_situation" })
    currentSituation: string;

    @Column({ default: null, name: "testimony" })
    testimony: string;

    @Column({ default: null, name: "socio_eco_data" })
    socioEcoData: string;

    @Column({ default: null, name: "social_concept" })
    socialConcept: string;

    @Column({ default: null, name: "classification" })
    classification: string;

    @Column({ default: null, name: "patient_cellphone_ref" })
    patientCellPhoneRef: number;

    @Column({ default: null, name: "medical_diagnostic" })
    medicalDiagnostic: string;

    @Column({ default: null, name: "reference_address" })
    referenceAddress: string;

    @Column({ default: null, name: "description_family_home" })
    descriptionFamilyHome: string;

    @Column({ default: null, name: "program" })
    program: string;

    @CreateDateColumn()
    created!: Date;
}
