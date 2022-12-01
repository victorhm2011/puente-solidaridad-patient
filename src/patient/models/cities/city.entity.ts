import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('cities')
export class CityEntity {
    @PrimaryColumn({ name: "city_id" })
    cityId: string;

    @Column({ default: null, name: "city_name" })
    cityName: string;
}
