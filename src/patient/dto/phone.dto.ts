import { IsString, MaxLength } from "class-validator";

export class PhoneDto {

    @MaxLength(2)
    @IsString()
    phoneId: string;

    @MaxLength(30)
    @IsString()
    phoneType: string;
}
