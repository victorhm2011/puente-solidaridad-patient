import { IsString, MaxLength } from "class-validator";

export class OccupationDto {

    @MaxLength(2)
    @IsString()
    occupationId: string;

    @MaxLength(30)
    @IsString()
    occupation: string;

    @MaxLength(200)
    @IsString()
    occupationDescription: string;
}