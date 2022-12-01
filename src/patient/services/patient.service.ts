import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PatientExitDto } from '../dto/patientExit.dto';
import { PatientEntity } from '../models/patient.entity';
import { Patient } from '../models/patient.interface';
import { HttpService } from '@nestjs/axios';
import { CivilStatusEntity } from '../models/civilStatus/civilStatus.entity';
import { CivilStatus } from '../models/civilStatus/civilStatus.interface';
import { CityEntity } from '../models/cities/city.entity';
import { City } from '../models/cities/city.interface';
import { Gender } from '../models/genders/gender.interface';
import { GenderEntity } from '../models/genders/gender.entity';
import { Population } from '../models/population/population.interface';
import { PopulationEntity } from '../models/population/population.entity';
import { MunicipalityEntity } from '../models/municipality/municipality.entity';
import { Municipality } from '../models/municipality/municipality.interface';
import { Relationship } from '../models/relationship.enum';
import { RelativeDto } from '../dto/relative.dto';
import { RelativeService } from './relative/relative.service';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(PatientEntity)
        private readonly patientRepository: Repository<PatientEntity>,
        @InjectRepository(CivilStatusEntity)
        private readonly civilStatusRepository: Repository<CivilStatusEntity>,
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @InjectRepository(GenderEntity)
        private readonly genderRepository: Repository<GenderEntity>,
        @InjectRepository(MunicipalityEntity)
        private readonly municipalityRepository: Repository<MunicipalityEntity>,
        @InjectRepository(PopulationEntity)
        private readonly populationRepository: Repository<PopulationEntity>,
        private relativeService: RelativeService,
        private http: HttpService
    ){}

    async createPatient(patient: Patient): Promise<Patient> {
        const newPatient = this.patientRepository.save(patient);
        this.relativeService.createRelative(this.createRelativeByPatient(await newPatient));
        return newPatient;
    }

    getPatientsList(): Observable<Patient[]> {
        return from(this.patientRepository.find());
    }

    async getPatient(id: string): Promise<PatientExitDto> {
        return this.patientRepository.findOne(id);
    }

    async updatePatient(id: string, patient: Patient): Promise<UpdateResult> {
        return this.patientRepository.update(id, patient);
    }

    async deletePatient(id: string): Promise<DeleteResult> {
        return this.patientRepository.softDelete(id);
    }

    async getSurgeriesbyPatient(id: string, @Request() req): Promise<any> {
        return this.http.get('http://localhost:4000/patient/' + id + '/surgeries/' + req.headers.authorization)
        .toPromise()
        .then(res => res.data)
        .catch(err => err); 
    }

    createCivilStatus(civilStatus: CivilStatus): Observable<CivilStatus> {
        return from(this.civilStatusRepository.save(civilStatus));
    }

    async getCivilStatus(civilStatusId: string): Promise<CivilStatus> {
        return this.civilStatusRepository.findOne(civilStatusId);
    }

    getCivilStatusesList(): Observable<CivilStatus[]> {
        return from(this.civilStatusRepository.find());
    }

    createCity(city: City): Observable<City> {
        return from(this.cityRepository.save(city));
    }

    async getCity(cityId: string): Promise<City> {
        return this.cityRepository.findOne(cityId);
    }

    getCitiesList(): Observable<City[]> {
        return from(this.cityRepository.find());
    }

    createGender(gender: Gender): Observable<Gender> {
        return from(this.genderRepository.save(gender));
    }

    async getGender(genderId: string): Promise<Gender> {
        return this.genderRepository.findOne(genderId);
    }

    getGendersList(): Observable<Gender[]> {
        return from(this.genderRepository.find());
    }

    async validatePhysician(patient: Patient, @Request() req): Promise<any> {
        return this.http.get('https://puente-solidaridad-physician.herokuapp.com/v1/physician/' + patient.treatingPhysicianId, {
            headers: {
                'Authorization': req.headers.authorization,
            }  
        })
        .toPromise()
        .then(res => res.data)
        .catch(err => err); 
    }

    createPopulation(population: Population): Observable<Population> {
        return from(this.populationRepository.save(population));
    }

    async getPopulation(populationId: string): Promise<Population> {
        return this.populationRepository.findOne(populationId);
    }

    getPopulationsList(): Observable<Population[]> {
        return from(this.populationRepository.find());
    }

    createMunicipality(municipality: Municipality): Observable<Municipality> {
        return from(this.municipalityRepository.save(municipality));
    }

    async getMunicipality(municipalityId: string): Promise<Municipality> {
        return this.municipalityRepository.findOne(municipalityId);
    }

    getMunicipalitiesList(): Observable<Municipality[]> {
        return from(this.municipalityRepository.find());
    }

    createRelativeByPatient(patient: Patient): RelativeDto {
        let relative = new RelativeDto();
        relative.patientId = patient.patientId;
        relative.relativeName = patient.patientName;
        relative.relativeFirstLastName = patient.patientFirstLastName;
        relative.relativeSecondLastName = patient.patientSecondLastName;
        relative.relativeDateOfBirth = patient.patientDateOfBirth;
        relative.relativeOccupation = patient.patientOccupation;
        relative.civilStatus = patient.civilStatus;
        relative.relationship = Relationship.PATIENT;
        relative.observations = "Paciente";
        return relative;
    }
}
