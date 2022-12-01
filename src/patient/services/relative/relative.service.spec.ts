import { Test, TestingModule } from '@nestjs/testing';
import { RelativeService } from './relative.service';

describe('RelativeService', () => {
  let service: RelativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelativeService],
    }).compile();

    service = module.get<RelativeService>(RelativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
