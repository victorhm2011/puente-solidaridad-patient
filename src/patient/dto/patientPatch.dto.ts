import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class PatientPatchDto {

    @IsOptional()
    @IsString()
    @MaxLength(500)
    patientName: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    patientFirstLastName: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    patientSecondLastName: string;

    @IsOptional()
    @IsDateString()
    patientDateOfBirth: Date;

    @IsOptional()
    @MaxLength(1)
    @IsString()
    genderId: string;

    @IsNumber()
    @IsOptional()
    patientCellphone: number;

    @IsNumber()
    @IsOptional()
    patientPhone: number;

    @IsString()
    @IsOptional()
    @MaxLength(2000)
    familySituation: string;

    @IsOptional()
    @IsString()
    socioEcoSituationId: string;

    @IsOptional()
    @MaxLength(500)
    @IsString()
    civilStatus: string;

    @IsOptional()
    @IsString()
    @MaxLength(2000)
    medicalDiagnostic: string;

    @IsOptional()
    @IsString()
    @MaxLength(2000)
    reference: string;

    @IsOptional()
    @IsDateString()
    surgeryDate: Date;

    @IsOptional()
    @IsDateString()
    hospitalizationDate: Date;

    @IsOptional()
    @IsString()
    treatingPhysicianId: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    patientOccupation: string;

    @IsOptional()
    @IsString()
    valuationReportId: string;

    @IsOptional()
    @MaxLength(2000)
    @IsString()
    placeOfBirth: string;

    @IsOptional()
    @MaxLength(2000)
    @IsString()
    placeOfResidence: string;
}