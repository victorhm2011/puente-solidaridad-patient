import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class SocioEcoSituationDto {

    @IsNumber()
    @IsOptional()
    dependentMembers: number;

    @IsNumber()
    @IsOptional()
    totalIncome: number;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    housing: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    tenancy: string;

    @IsNumber()
    @IsOptional()
    numberOfRooms: number;

    @IsNumber()
    @IsOptional()
    totalExpenses: number;

    @IsNumber()
    @IsOptional()
    waterConsumption: number;

    @IsNumber()
    @IsOptional()
    electricityConsumption: number;

    @IsNumber()
    @IsOptional()
    livingPlaceConsumption: number;

    @IsNumber()
    @IsOptional()
    feedingConsumption: number;

    @IsNumber()
    @IsOptional()
    educationConsumption: number;

    @IsNumber()
    @IsOptional()
    telephoneConsumption: number;

    @IsNumber()
    @IsOptional()
    transportationConsumption: number;

    @IsNumber()
    @IsOptional()
    healthConsumption: number;

    @IsNumber()
    @IsOptional()
    otherConsumption: number;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    waterConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    electricityConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    livingPlaceConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    feedingConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    educationConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    telephoneConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    transportationConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    healthConsumptionDetail: string;

    @IsString()
    @MaxLength(1000)
    @IsOptional()
    otherConsumptionDetail: string;
}