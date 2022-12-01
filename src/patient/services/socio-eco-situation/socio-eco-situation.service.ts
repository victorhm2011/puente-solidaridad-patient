import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { SocioEcoSituationEntity } from 'src/patient/models/socioEcoSituation/socioEcoSituation.entity';
import { SocioEcoSituation } from 'src/patient/models/socioEcoSituation/socioEcoSituation.interface';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SocioEcoSituationService {
    constructor(
        @InjectRepository(SocioEcoSituationEntity)
        private readonly socioEcoSituationRepository: Repository<SocioEcoSituationEntity>
    ){}

    async createSocioEcoSituation(socioEcoSituation: SocioEcoSituation): Promise<SocioEcoSituation> {
        return this.socioEcoSituationRepository.save(socioEcoSituation);
    }

    async getSocioEcoSituation(socioEcoSituationId: string): Promise<SocioEcoSituation> {
        return this.socioEcoSituationRepository.findOne(socioEcoSituationId);
    }

    async updateSocioEcoSituation(id: string, socioEcoSituation: SocioEcoSituation): Promise<UpdateResult> {
        return this.socioEcoSituationRepository.update(id, socioEcoSituation);
    }
}
