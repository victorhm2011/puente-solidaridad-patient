import { Body, Controller, Delete, Get, HttpException, Param, ParseUUIDPipe, Request, Patch, Post, UseGuards, UsePipes, ValidationPipe, NotFoundException, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from '../decorators/roles.decorator';
import { PatientDto } from '../dto/patient.dto';
import { PatientExitDto } from '../dto/patientExit.dto';
import { PatientPatchDto } from '../dto/patientPatch.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Patient } from '../models/patient.interface';
import { Role } from '../models/role.enum';
import { PatientService } from '../services/patient.service';
import { errors } from '../constants/constants';
import { CivilStatusDto } from '../dto/civil_status.dto';
import { CivilStatus } from '../models/civilStatus/civilStatus.interface';
import { CityDto } from '../dto/city.dto';
import { City } from '../models/cities/city.interface';
import { GenderDto } from '../dto/gender.dto';
import { Gender } from '../models/genders/gender.interface';

@Controller({version: '1'})
export class PatientController {
    constructor(private patientService: PatientService) {}

    @Roles(Role.ADMIN)
    @Post('patient')
    @UsePipes(new ValidationPipe())
    async create(@Body() patient: PatientDto,  @Request() req): Promise<Patient> { 
        const gender = await this.patientService.getGender(patient.genderId);
        const validation = await this.patientService.validatePhysician(patient, req);
        if(!gender){
            throw new NotFoundException(errors.existGender);
        }
        if(!validation.id && (patient.treatingPhysicianId != null)){
            throw new NotFoundException(errors.existPhysician);
        } else {
            return await this.patientService.createPatient(patient);
        }
    }

    @Get('patients')
    findAll(): Observable<Patient[]> {
        return this.patientService.getPatientsList();
    }

    @Get('patient/:id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<PatientExitDto> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        return patient;
    }

    @Get('patient/:id/surgeries')
    async getPatient(@Param('id', new ParseUUIDPipe()) id: string, @Request() req): Promise<any> {
        return await this.patientService.getSurgeriesbyPatient(id, req);
    }

    @Patch('patient/:id')
    @UsePipes(new ValidationPipe())
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() patient: PatientPatchDto, @Request() req
    ): Promise<PatientExitDto> {
        const patientToUpdate = await this.patientService.getPatient(id);
        const gender = await this.patientService.getGender(patient.genderId);
        const validation = await this.patientService.validatePhysician(patient, req);
        if(!gender){
            throw new NotFoundException(errors.existGender);
        }
        if(!patientToUpdate){
            throw new NotFoundException(errors.exist);
        }
        if(!validation.id && (patient.treatingPhysicianId != null)){
            throw new NotFoundException(errors.existPhysician);
        }
        await this.patientService.updatePatient(id, patient);
        return await this.patientService.getPatient(id);
    }

    @Roles(Role.ADMIN)
    @Delete('patient/:id')
    async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<PatientExitDto> {
        const patientToUpdate = await this.patientService.getPatient(id);
        if(!patientToUpdate){
            throw new NotFoundException(errors.exist);
        } else {
            await this.patientService.deletePatient(id);
            throw new HttpException(errors.removed, errors.noContent);
        }
    }

    @Roles(Role.ADMIN)
    @Post('civilStatus')
    createCivilStatus(@Body() civilStatus: CivilStatusDto): Observable<CivilStatus> {
        return this.patientService.createCivilStatus(civilStatus);
    }

    @Get('civilStatuses')
    getCivilStatuses(): Observable<CivilStatus[]> {
        return this.patientService.getCivilStatusesList();
    }

    @Roles(Role.ADMIN)
    @Post('city')
    createCity(@Body() city: CityDto): Observable<City> {
        return this.patientService.createCity(city);
    }

    @Get('cities')
    getCities(): Observable<City[]> {
        return this.patientService.getCitiesList();
    }

    @Roles(Role.ADMIN)
    @Post('gender')
    createGender(@Body() gender: GenderDto): Observable<Gender> {
        return this.patientService.createGender(gender);
    }

    @Get('genders')
    getGenders(): Observable<Gender[]> {
        return this.patientService.getGendersList();
    }
}
