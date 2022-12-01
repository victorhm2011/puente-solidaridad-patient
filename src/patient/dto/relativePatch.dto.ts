import { IsDateString, IsOptional, IsString, MaxLength } from "class-validator";
import { Relationship } from "../models/relationship.enum";

export class RelativePatchDto {

    @IsOptional()
    @IsString()
    patientId: string;

    @IsOptional()
    @MaxLength(1000)
    @IsString()
    relativeName: string;

    @IsOptional()
    @MaxLength(1000)
    @IsString()
    relativeFirstLastName: string;

    @MaxLength(1000)
    @IsOptional()
    @IsString()
    relativeSecondLastName: string;

    @IsOptional()
    @IsDateString()
    relativeDateOfBirth: Date;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    instruction: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    relativeOccupation: string;

    @IsOptional()
    @MaxLength(500)
    @IsString()
    civilStatus: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    relationship: string;

    @IsOptional()
    @MaxLength(2000)
    @IsString()
    observations: string;
}