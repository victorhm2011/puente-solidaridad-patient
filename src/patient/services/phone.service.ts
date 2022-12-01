import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PhoneByPatientEntity } from '../models/phoneByPatient/phoneByPatient.entity';
import { PhoneByPatient } from '../models/phoneByPatient/phoneByPatient.interface';
import { PhoneEntity } from '../models/phones/phone.entity';
import { Phone } from '../models/phones/phone.interface';

@Injectable()
export class PhoneService {
    constructor(
        @InjectRepository(PhoneEntity)
        private readonly phoneRepository: Repository<PhoneEntity>,
        @InjectRepository(PhoneByPatientEntity)
        private readonly phoneByPatientRepository: Repository<PhoneByPatientEntity>,
        private http: HttpService
    ){}

    createPhoneType(phoneType: Phone): Observable<Phone> {
        return from(this.phoneRepository.save(phoneType));
    }

    createPhoneByPatient(phoneByPatient: PhoneByPatient): Observable<PhoneByPatient> {
        return from(this.phoneByPatientRepository.save(phoneByPatient));
    }

    getPhoneTypeList(): Observable<Phone[]> {
        return from(this.phoneRepository.find());
    }

    async getPhoneType(phoneTypeId: string): Promise<Phone> {
        return this.phoneRepository.findOne(phoneTypeId);
    }

    getPhoneByPatientList(patientId: string): Observable<PhoneByPatient[]> {
        return from(this.phoneByPatientRepository.find({where: {patientId: patientId}}));
    }

    async getPhoneByPatient(phoneByPatientId: string): Promise<PhoneByPatient> {
        return this.phoneByPatientRepository.findOne(phoneByPatientId);
    }

    async updatePhoneByPatient(id: string, phoneByPatient: PhoneByPatient): Promise<UpdateResult> {
        return this.phoneByPatientRepository.update(id, phoneByPatient);
    }

    async deletePhoneByPatient(id: string): Promise<DeleteResult> {
        return this.phoneByPatientRepository.delete(id);
    }
}
