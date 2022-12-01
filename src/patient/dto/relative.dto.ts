import { IsDateString, IsOptional, IsString, MaxLength } from "class-validator";
import { Relationship } from "../models/relationship.enum";

export class RelativeDto {

    @IsString()
    patientId: string;

    @MaxLength(1000)
    @IsString()
    relativeName: string;

    @MaxLength(1000)
    @IsString()
    relativeFirstLastName: string;

    @MaxLength(1000)
    @IsOptional()
    @IsString()
    relativeSecondLastName: string;

    @IsDateString()
    relativeDateOfBirth: Date;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    instruction: string;

    @IsString()
    @MaxLength(500)
    relativeOccupation: string;

    @IsString()
    @MaxLength(500)
    civilStatus: string;

    @IsString()
    @MaxLength(500)
    relationship: string;

    @MaxLength(2000)
    @IsString()
    observations: string;
}
