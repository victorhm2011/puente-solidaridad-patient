import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('occupations')
export class OccupationEntity {
    @PrimaryColumn({ name: "occupation_id" })
    occupationId: string;

    @Column({ default: null, name: "occupation" })
    occupation: string;

    @Column({ default: null, name: "occupation_description" })
    occupationDescription: string;
}
