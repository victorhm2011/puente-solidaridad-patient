import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class ValuationReportDto {

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    authorName: string;

    @IsString()
    @MaxLength(1000)
    socialWorker: string;

    @IsString()
    @MaxLength(2000)
    generalReferences: string;

    @IsString()
    @MaxLength(2000)
    treatment: string;

    @IsString()
    @MaxLength(2000)
    currentSituation: string;

    @IsString()
    @MaxLength(2000)
    testimony: string;

    @IsString()
    @MaxLength(2000)
    socioEcoData: string;

    @IsString()
    @MaxLength(2000)
    socialConcept: string;

    @IsString()
    @MaxLength(1)
    classification: string;

    @IsNumber()
    @IsOptional()
    patientCellPhoneRef: number;

    @IsString()
    @MaxLength(2000)
    medicalDiagnostic: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    referenceAddress: string;

    @IsString()
    @MaxLength(2000)
    descriptionFamilyHome: string;

    @IsString()
    @MaxLength(500)
    program: string;
}
