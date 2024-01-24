import { Test, TestingModule } from '@nestjs/testing';
import { BinarySearchService } from './binary-search.service';

describe('BinarySearchService', () => {
  let service: BinarySearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinarySearchService],
    }).compile();

    service = module.get<BinarySearchService>(BinarySearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('binarySearch', () => {

    it('should find the element in the array and return the index', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const targetValue = 7;

      const result = service.binarySearch(sortedArray, targetValue);

      expect(result).toBe(6);
    });

    it('should return -1 if the element is not found in the array', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const targetValue = 20;

      const result = service.binarySearch(sortedArray, targetValue);
      expect(result).toBe(-1);
    });


  })

});
