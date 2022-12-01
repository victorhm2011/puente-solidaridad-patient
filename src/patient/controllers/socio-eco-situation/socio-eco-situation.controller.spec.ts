import { Test, TestingModule } from '@nestjs/testing';
import { SocioEcoSituationController } from './socio-eco-situation.controller';

describe('SocioEcoSituationController', () => {
  let controller: SocioEcoSituationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocioEcoSituationController],
    }).compile();

    controller = module.get<SocioEcoSituationController>(SocioEcoSituationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
