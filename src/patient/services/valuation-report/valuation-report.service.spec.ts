import { Test, TestingModule } from '@nestjs/testing';
import { ValuationReportService } from './valuation-report.service';

describe('ValuationReportService', () => {
  let service: ValuationReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValuationReportService],
    }).compile();

    service = module.get<ValuationReportService>(ValuationReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
