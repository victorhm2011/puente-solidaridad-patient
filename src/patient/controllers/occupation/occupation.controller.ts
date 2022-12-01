import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { errors } from 'src/patient/constants/constants';
import { OccupationDto } from 'src/patient/dto/occupation.dto';
import { Occupation } from 'src/patient/models/occupation/occupation.interface';
import { OccupationService } from 'src/patient/services/occupation/occupation.service';

@Controller({version: '1'})
export class OccupationController {
    constructor(private occupationService: OccupationService) {}

    @Post('occupation')
    async createOccupation(@Body() newOccupation: OccupationDto): Promise<Occupation> {
        const occupation = await this.occupationService.getOccupation(newOccupation.occupationId);
        if(occupation){
            throw new BadRequestException(errors.repeatedOccupation);
        }
        return await this.occupationService.createOccupation(newOccupation);
    }

    @Get('occupation/:occupationId')
    async getOccupation(@Param('occupationId') occupationId: string): Promise<Occupation> {
        const occupation = await this.occupationService.getOccupation(occupationId);
        if(!occupation){
            throw new NotFoundException(errors.existOccupation);
        }
        return occupation;
    }
}
