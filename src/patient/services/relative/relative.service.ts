import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { RelativeDto } from 'src/patient/dto/relative.dto';
import { RelativeEntity } from 'src/patient/models/relatives/relative.entity';
import { Relative } from 'src/patient/models/relatives/relative.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class RelativeService {
    constructor(
        @InjectRepository(RelativeEntity)
        private readonly relativeRepository: Repository<RelativeEntity>
    ){}

    async createRelative(relative: Relative): Promise<Relative> {
        return this.relativeRepository.save(relative);
    }

    getRelativesByPatientId(patientId: string): Observable<Relative[]> {
        return from(this.relativeRepository.find({where: {patientId: patientId}}));
    }

    async getRelative(id: string): Promise<RelativeDto> {
        return this.relativeRepository.findOne(id);
    }

    async updateRelative(id: string, relative: Relative): Promise<UpdateResult> {
        return this.relativeRepository.update(id, relative);
    }

    async deleteRelative(id: string): Promise<DeleteResult> {
        return this.relativeRepository.delete(id);
    }

    async deleteRelativesByPatientId(patientId: string): Promise<DeleteResult> {
        return this.relativeRepository.delete({ patientId: patientId });
    }
}
