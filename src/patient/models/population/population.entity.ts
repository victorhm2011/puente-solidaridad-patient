import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('population')
export class PopulationEntity {

    @PrimaryGeneratedColumn("uuid", { name: "population_id" })
    populationId: string;

    @Column({ default: null, name: "population_name" })
    populationName: string;
}