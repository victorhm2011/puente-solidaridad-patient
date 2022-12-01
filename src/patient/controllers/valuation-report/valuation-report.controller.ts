import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { errors } from 'src/patient/constants/constants';
import { MunicipalityDto } from 'src/patient/dto/municipality.dto';
import { PopulationDto } from 'src/patient/dto/population.dto';
import { ValuationReportDto } from 'src/patient/dto/valuationReport/valuationReport.dto';
import { ValuationReportPatchDto } from 'src/patient/dto/valuationReport/valuationReportPatch.dto';
import { Municipality } from 'src/patient/models/municipality/municipality.interface';
import { Population } from 'src/patient/models/population/population.interface';
import { ValuationReport } from 'src/patient/models/valuationReport/valuationReport.interface';
import { PatientService } from 'src/patient/services/patient.service';
import { ValuationReportService } from 'src/patient/services/valuation-report/valuation-report.service';

@Controller({version: '1'})
export class ValuationReportController {
    constructor(private valuationReportService: ValuationReportService, private patientService: PatientService) {}

    @Post('patient/:id/valuation')
    async createValuationReport(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() valuationReport: ValuationReportDto)
    : Promise<ValuationReport> {
        let patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        const newValuationReport = await this.valuationReportService.createValuationReport(valuationReport);
        patient.valuationReportId = newValuationReport.valuationReportId;
        await this.patientService.updatePatient(id, patient);
        return newValuationReport;
    }

    @Get('patient/:id/valuation')
    async getValuationReport(@Param('id', new ParseUUIDPipe()) id: string): Promise<ValuationReport> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        const valuation = await this.valuationReportService.getValuationReport(patient.valuationReportId);
        if(!valuation){
            throw new NotFoundException(errors.existValuation);
        }
        return valuation;
    }

    @Patch('patient/:id/valuation')
    @UsePipes(new ValidationPipe())
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() valuationReport: ValuationReportPatchDto
    ): Promise<ValuationReport> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        await this.valuationReportService.updateValuationReport(patient.valuationReportId, valuationReport);
        return await this.valuationReportService.getValuationReport(patient.valuationReportId);
    }

    @Post('municipality')
    createMunicipality(@Body() municipality: MunicipalityDto): Observable<Municipality> {
        return this.patientService.createMunicipality(municipality);
    }

    @Get('municipalities')
    getMunicipalities(): Observable<Municipality[]> {
        return this.patientService.getMunicipalitiesList();
    }

    @Post('population')
    createPopulation(@Body() population: PopulationDto): Observable<Population> {
        return this.patientService.createPopulation(population);
    }

    @Get('populations')
    getPopulation(): Observable<Population[]> {
        return this.patientService.getPopulationsList();
    }
}
