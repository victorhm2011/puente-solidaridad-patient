import { IsString, MaxLength } from "class-validator";

export class PopulationDto {

    @MaxLength(100)
    @IsString()
    populationName: string;
}
