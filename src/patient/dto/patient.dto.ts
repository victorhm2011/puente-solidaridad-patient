import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class PatientDto {

    @IsString()
    @MaxLength(500)
    patientName: string;

    @IsString()
    @MaxLength(500)
    patientFirstLastName: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    patientSecondLastName: string;

    @IsDateString()
    patientDateOfBirth: Date;

    @MaxLength(1)
    @IsString()
    genderId: string;

    @IsNumber()
    patientCellphone: number;

    @IsNumber()
    @IsOptional()
    patientPhone: number;

    @IsString()
    @MaxLength(2000)
    familySituation: string;

    @IsOptional()
    @IsString()
    socioEcoSituationId: string;

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

    @IsString()
    @MaxLength(500)
    patientOccupation: string;

    @IsOptional()
    @IsString()
    valuationReportId: string;

    @MaxLength(2000)
    @IsString()
    placeOfBirth: string;

    @MaxLength(2000)
    @IsString()
    placeOfResidence: string;
}
