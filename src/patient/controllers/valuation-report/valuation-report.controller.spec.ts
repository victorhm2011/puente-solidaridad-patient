import { Test, TestingModule } from '@nestjs/testing';
import { ValuationReportController } from './valuation-report.controller';

describe('ValuationReportController', () => {
  let controller: ValuationReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValuationReportController],
    }).compile();

    controller = module.get<ValuationReportController>(ValuationReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
