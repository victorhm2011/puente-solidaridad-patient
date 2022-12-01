import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('municipality')
export class MunicipalityEntity {

    @PrimaryGeneratedColumn("uuid", { name: "municipality_id" })
    municipalityId: string;

    @Column({ default: null, name: "municipality_name" })
    municipalityName: string;
}