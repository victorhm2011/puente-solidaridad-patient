import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValuationReportDto } from 'src/patient/dto/valuationReport/valuationReport.dto';
import { ValuationReportPatchDto } from 'src/patient/dto/valuationReport/valuationReportPatch.dto';
import { ValuationReportEntity } from 'src/patient/models/valuationReport/valuationReport.entity';
import { ValuationReport } from 'src/patient/models/valuationReport/valuationReport.interface';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ValuationReportService {
    constructor(
        @InjectRepository(ValuationReportEntity)
        private readonly valuationReportRepository: Repository<ValuationReportEntity>
    ){}

    async createValuationReport(valuationReport: ValuationReportDto): Promise<ValuationReport> {
        return this.valuationReportRepository.save(valuationReport);
    }

    async getValuationReport(id: string): Promise<ValuationReport> {
        if(!id){
            return null;
        }
        return this.valuationReportRepository.findOne(id);
    }

    async updateValuationReport(id: string, valuationReport: ValuationReportPatchDto): Promise<UpdateResult> {
        return this.valuationReportRepository.update(id, valuationReport);
    }
}
