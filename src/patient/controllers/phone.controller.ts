import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { errors } from '../constants/constants';
import { PhoneDto } from '../dto/phone.dto';
import { PhoneByPatientDto } from '../dto/phoneByPatient.dto';
import { PhoneByPatient } from '../models/phoneByPatient/phoneByPatient.interface';
import { Phone } from '../models/phones/phone.interface';
import { PatientService } from '../services/patient.service';
import { PhoneService } from '../services/phone.service';

@Controller({version: '1'})
export class PhoneController {
    constructor(private phoneService: PhoneService, private patientService: PatientService) {}

    @Post('phone')
    createPhoneType(@Body() phone: PhoneDto): Observable<Phone> {
        return this.phoneService.createPhoneType(phone);
    }

    @Post('phoneByPatient')
    createPhoneByPatient(@Body() phoneByPatient: PhoneByPatientDto): Observable<PhoneByPatient> {
        return this.phoneService.createPhoneByPatient(phoneByPatient);
    }

    @Get('phones')
    getGenders(): Observable<Phone[]> {
        return this.phoneService.getPhoneTypeList();
    }

    @Get('phone/:id')
    async getPhoneType(@Param('id', new ParseUUIDPipe()) id: string): Promise<Phone> {
        const phone = await this.phoneService.getPhoneType(id);
        if(!phone){
            throw new NotFoundException(errors.existPhone);
        }
        return phone;
    }

    @Get('patient/:id/phone')
    async getPhoneByPatientList(@Param('id', new ParseUUIDPipe()) id: string): Promise<PhoneByPatient> {
        const patient = await this.patientService.getPatient(id);
        if(!patient){
            throw new NotFoundException(errors.exist);
        }
        return await this.phoneService.getPhoneByPatient(id);
    }

    @Get('phoneByPatient/:id')
    async getPhoneByPatient(@Param('id', new ParseUUIDPipe()) id: string): Promise<PhoneByPatient> {
        const phone = await this.phoneService.getPhoneByPatient(id);
        if(!phone){
            throw new NotFoundException(errors.existPhone);
        }
        return phone;
    }

}
