import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('socio_eco_situations')
export class SocioEcoSituationEntity {
    @PrimaryGeneratedColumn("uuid", { name: "socio_eco_situation_id" })
    socioEcoSituationId: string;

    @Column({ default: null, name: "dependent_members" })
    dependentMembers: number;

    @Column({ default: null, name: "total_income" })
    totalIncome: number;

    @Column({ default: null, name: "housing" })
    housing: string;

    @Column({ default: null, name: "tenancy" })
    tenancy: string;

    @Column({ default: null, name: "number_of_rooms" })
    numberOfRooms: number;

    @Column({ default: null, name: "total_expenses" })
    totalExpenses: number;

    @Column({ default: null, name: "water_consumption" })
    waterConsumption: number;

    @Column({ default: null, name: "electricity_consumption" })
    electricityConsumption: number;

    @Column({ default: null, name: "living_place_consumption" })
    livingPlaceConsumption: number;

    @Column({ default: null, name: "feeding_consumption" })
    feedingConsumption: number;

    @Column({ default: null, name: "education_consumption" })
    educationConsumption: number;

    @Column({ default: null, name: "telephone_consumption" })
    telephoneConsumption: number;

    @Column({ default: null, name: "transportation_consumption" })
    transportationConsumption: number;

    @Column({ default: null, name: "health_consumption" })
    healthConsumption: number;

    @Column({ default: null, name: "other_consumption" })
    otherConsumption: number;

    @Column({ default: null, name: "water_consumption_detail" })
    waterConsumptionDetail: string;

    @Column({ default: null, name: "electricity_consumption_detail" })
    electricityConsumptionDetail: string;

    @Column({ default: null, name: "living_place_consumption_detail" })
    livingPlaceConsumptionDetail: string;

    @Column({ default: null, name: "feeding_consumption_detail" })
    feedingConsumptionDetail: string;

    @Column({ default: null, name: "education_consumption_detail" })
    educationConsumptionDetail: string;

    @Column({ default: null, name: "telephone_consumption_detail" })
    telephoneConsumptionDetail: string;

    @Column({ default: null, name: "transportation_consumption_detail" })
    transportationConsumptionDetail: string;

    @Column({ default: null, name: "health_consumption_detail" })
    healthConsumptionDetail: string;

    @Column({ default: null, name: "other_consumption_detail" })
    otherConsumptionDetail: string;

}
