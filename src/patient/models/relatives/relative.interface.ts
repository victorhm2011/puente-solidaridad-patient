import { Relationship } from "../relationship.enum";

export interface Relative {
    relativeId?: string;
    patientId?: string;
    relativeName?: string;
    relativeFirstLastName?: string;
    relativeSecondLastName?: string;
    relativeDateOfBirth?: Date;
    instruction: string;
    relativeOccupation: string;
    civilStatus?: string;
    relationship?: string;
    observations?: string;
}