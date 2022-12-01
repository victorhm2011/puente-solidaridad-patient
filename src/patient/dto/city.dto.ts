import { IsString, MaxLength } from "class-validator";

export class CityDto {

    @MaxLength(2)
    @IsString()
    cityId: string;

    @MaxLength(30)
    @IsString()
    cityName: string;
}
