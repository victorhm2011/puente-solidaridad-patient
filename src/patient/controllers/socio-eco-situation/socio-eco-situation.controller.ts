import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { errors } from 'src/patient/constants/constants';
import { SocioEcoSituationDto } from 'src/patient/dto/socioEcoSituation/socioEcoSituation.dto';
import { SocioEcoSituation } from 'src/patient/models/socioEcoSituation/socioEcoSituation.interface';
import { PatientService } from 'src/patient/services/patient.service';
import { SocioEcoSituationService } from 'src/patient/services/socio-eco-situation/socio-eco-situation.service';

@Controller({version: '1'})
export class SocioEcoSituationController {
    constructor(private socioEcoSituationService: SocioEcoSituationService, private patientService: PatientService) {}
    
    @Post('patient/:id/situation')
    async createSocioEcoSituation(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() socioEcoSituation: SocioEcoSituationDto)
    : Promise<SocioEcoSituation> {
        let patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        const newSocioEcoSituation = await this.socioEcoSituationService.createSocioEcoSituation(socioEcoSituation);
        patient.socioEcoSituationId = newSocioEcoSituation.socioEcoSituationId;
        await this.patientService.updatePatient(id, patient);
        return newSocioEcoSituation;
    }

    @Get('patient/:id/situation')
    async getSocioEcoSituation(@Param('id', new ParseUUIDPipe()) id: string): Promise<SocioEcoSituation> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        return await this.socioEcoSituationService.getSocioEcoSituation(patient.socioEcoSituationId);
    }

    @Patch('patient/:id/situation')
    @UsePipes(new ValidationPipe())
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() socioEcoSituation: SocioEcoSituationDto
    ): Promise<SocioEcoSituation> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        await this.socioEcoSituationService.updateSocioEcoSituation(patient.socioEcoSituationId, socioEcoSituation);
        return await this.socioEcoSituationService.getSocioEcoSituation(patient.socioEcoSituationId);
    }
}
