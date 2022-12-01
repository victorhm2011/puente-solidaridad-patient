import { IsString, IsUUID, MaxLength } from "class-validator";

export class PhoneByPatientDto {

    @IsUUID()
    @IsString()
    patientId: string;

    @MaxLength(2)
    @IsString()
    phoneId: string;

    @MaxLength(20)
    @IsString()
    patientPhone: string;
}