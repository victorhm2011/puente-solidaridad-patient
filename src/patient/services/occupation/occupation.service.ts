import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { OccupationEntity } from 'src/patient/models/occupation/occupation.entity';
import { Occupation } from 'src/patient/models/occupation/occupation.interface';
import { Repository } from 'typeorm';

@Injectable()
export class OccupationService {
    constructor(
        @InjectRepository(OccupationEntity)
        private readonly occupationRepository: Repository<OccupationEntity>,
        private http: HttpService
    ){}

    async createOccupation(occupation: Occupation): Promise<Occupation> {
        return this.occupationRepository.save(occupation);
    }

    async getOccupation(occupationId: string): Promise<Occupation> {
        return this.occupationRepository.findOne(occupationId);
    }
}
