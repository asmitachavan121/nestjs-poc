import { Test, TestingModule } from '@nestjs/testing';
import { MasterRecordService } from './master-record.service';

describe('MasterRecordService', () => {
  let service: MasterRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterRecordService],
    }).compile();

    service = module.get<MasterRecordService>(MasterRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
