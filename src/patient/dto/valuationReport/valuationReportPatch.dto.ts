import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class ValuationReportPatchDto {

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    authorName: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    socialWorker: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    generalReferences: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    treatment: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    currentSituation: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    testimony: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    socioEcoData: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    socialConcept: string;

    @IsString()
    @MaxLength(2)
    @IsOptional()
    classification: string;

    @IsNumber()
    @IsOptional()
    patientCellPhoneRef: number;

    @IsString()
    @IsOptional()
    @MaxLength(2000)
    medicalDiagnostic: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    referenceAddress: string;

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    descriptionFamilyHome: string;

    @IsString()
    @MaxLength(500)
    @IsOptional()
    program: string;
}
