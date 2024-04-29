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

  it('should correctly sort an array', () => {
    const unsortedArray = [5, 3, 8, 4, 2, 1, 9, 7, 6];
    const sortedArray = service.sort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should return an empty array if input is empty', () => {
    const emptyArray: number[] = [];
    const sortedArray = service.sort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should return the same array if input has only one element', () => {
    const singleElementArray = [42];
    const sortedArray = service.sort(singleElementArray);
    expect(sortedArray).toEqual(singleElementArray);
  });
});
