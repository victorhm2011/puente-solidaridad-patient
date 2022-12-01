import { Module } from '@nestjs/common';
import { PatientService } from './services/patient.service';
import { PatientController } from './controllers/patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from './models/patient.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { CivilStatusEntity } from './models/civilStatus/civilStatus.entity';
import { PhoneEntity } from './models/phones/phone.entity';
import { PhoneController } from './controllers/phone.controller';
import { PhoneService } from './services/phone.service';
import { PhoneByPatientEntity } from './models/phoneByPatient/phoneByPatient.entity';
import { OccupationService } from './services/occupation/occupation.service';
import { OccupationController } from './controllers/occupation/occupation.controller';
import { OccupationEntity } from './models/occupation/occupation.entity';
import { CityEntity } from './models/cities/city.entity';
import { RelativeController } from './controllers/relative/relative.controller';
import { RelativeService } from './services/relative/relative.service';
import { RelativeEntity } from './models/relatives/relative.entity';
import { GenderEntity } from './models/genders/gender.entity';
import { SocioEcoSituationEntity } from './models/socioEcoSituation/socioEcoSituation.entity';
import { SocioEcoSituationController } from './controllers/socio-eco-situation/socio-eco-situation.controller';
import { SocioEcoSituationService } from './services/socio-eco-situation/socio-eco-situation.service';
import { PopulationEntity } from './models/population/population.entity';
import { MunicipalityEntity } from './models/municipality/municipality.entity';
import { ValuationReportEntity } from './models/valuationReport/valuationReport.entity';
import { ValuationReportController } from './controllers/valuation-report/valuation-report.controller';
import { ValuationReportService } from './services/valuation-report/valuation-report.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientEntity, CivilStatusEntity, PhoneEntity, PhoneByPatientEntity, OccupationEntity, CityEntity, 
      RelativeEntity, GenderEntity, SocioEcoSituationEntity, PopulationEntity, MunicipalityEntity, ValuationReportEntity]),
    HttpModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
  ],
  providers: [PatientService, JwtGuard, JwtStrategy, RolesGuard,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    PhoneService,
    OccupationService,
    RelativeService,
    SocioEcoSituationService,
    ValuationReportService
  ],
  controllers: [PatientController, PhoneController, OccupationController, RelativeController, SocioEcoSituationController, ValuationReportController]
})
export class PatientModule {}
