import { Test, TestingModule } from '@nestjs/testing';
import { MasterRecordController } from './master-record.controller';

describe('MasterRecord Controller', () => {
  let controller: MasterRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterRecordController],
    }).compile();

    controller = module.get<MasterRecordController>(MasterRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
