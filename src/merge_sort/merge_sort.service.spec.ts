import { Test, TestingModule } from '@nestjs/testing';
import { MergeSortService } from './merge_sort.service';

describe('MergeSortService', () => {
  let service: MergeSortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MergeSortService],
    }).compile();

    service = module.get<MergeSortService>(MergeSortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
