import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { errors } from 'src/patient/constants/constants';
import { RelativeDto } from 'src/patient/dto/relative.dto';
import { RelativePatchDto } from 'src/patient/dto/relativePatch.dto';
import { Relative } from 'src/patient/models/relatives/relative.interface';
import { OccupationService } from 'src/patient/services/occupation/occupation.service';
import { PatientService } from 'src/patient/services/patient.service';
import { RelativeService } from 'src/patient/services/relative/relative.service';

@Controller({version: '1'})
export class RelativeController {
    constructor(private relativeService: RelativeService, private patientService: PatientService) {}

    @Post('relative')
    @UsePipes(new ValidationPipe())
    async createRelative(@Body() relative: RelativeDto): Promise<Relative> {
        const patient = await this.patientService.getPatient(relative.patientId);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        return await this.relativeService.createRelative(relative);
    }

    @Get('patient/:id/relatives')
    getRelativesByPatientId(@Param('id', new ParseUUIDPipe()) id: string): Observable<Relative[]> {
        return this.relativeService.getRelativesByPatientId(id);
    }

    @Get('relative/:id')
    async getRelative(@Param('id', new ParseUUIDPipe()) id: string): Promise<RelativeDto> {
        const relative = await this.relativeService.getRelative(id);
        if(!relative){
            throw new NotFoundException(errors.existRelative);
        }
        return relative;
    }

    @Patch('relative/:id')
    @UsePipes(new ValidationPipe())
    async updateRelative(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() relative: RelativePatchDto
    ): Promise<RelativeDto> {
        const relativeToUpdate = await this.relativeService.getRelative(id);
        if(!relativeToUpdate){
            throw new NotFoundException(errors.existRelative);
        }
        await this.relativeService.updateRelative(id, relative);
        return await this.relativeService.getRelative(id);
    }

    @Delete('relative/:id')
    async deleteRelative(@Param('id', new ParseUUIDPipe()) id: string): Promise<RelativeDto> {
        const relativeToDelete = await this.relativeService.getRelative(id);
        if(!relativeToDelete){
            throw new NotFoundException(errors.existRelative);
        } else {
            await this.relativeService.deleteRelative(id);
            throw new HttpException(errors.removedRelative, errors.noContent);
        }
    }

    @Delete('patient/:id/relatives')
    async deleteRelativesByPatientId(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        return this.relativeService.deleteRelativesByPatientId(id);
    }

}
