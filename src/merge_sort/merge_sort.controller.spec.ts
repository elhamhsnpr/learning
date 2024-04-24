import { Test, TestingModule } from '@nestjs/testing';
import { MergeSortController } from './merge_sort.controller';

describe('MergeSortController', () => {
  let controller: MergeSortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MergeSortController],
    }).compile();

    controller = module.get<MergeSortController>(MergeSortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
