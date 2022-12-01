import { IsString, MaxLength } from "class-validator";

export class MunicipalityDto {

    @MaxLength(100)
    @IsString()
    municipalityName: string;
}
