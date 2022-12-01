import { Test, TestingModule } from '@nestjs/testing';
import { SocioEcoSituationService } from './socio-eco-situation.service';

describe('SocioEcoSituationService', () => {
  let service: SocioEcoSituationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocioEcoSituationService],
    }).compile();

    service = module.get<SocioEcoSituationService>(SocioEcoSituationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
