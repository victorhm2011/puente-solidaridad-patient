import { IsString, MaxLength } from "class-validator";

export class GenderDto {

    @MaxLength(1)
    @IsString()
    genderId: string;

    @MaxLength(30)
    @IsString()
    genderType: string;
}