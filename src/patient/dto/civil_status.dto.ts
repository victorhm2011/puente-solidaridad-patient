import { IsString, MaxLength } from "class-validator";

export class CivilStatusDto {

    @MaxLength(2)
    @IsString()
    civilStatusId: string;

    @MaxLength(20)
    @IsString()
    civilStatus: string;

    @MaxLength(100)
    @IsString()
    civilDescription: string;
}
