import { Test, TestingModule } from '@nestjs/testing';
import { BinarySearchController } from './binary-search.controller';
import { BinarySearchService } from './binary-search.service';

describe('BinarySearchController', () => {
  let controller: BinarySearchController;
  let service: BinarySearchService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinarySearchController],
      providers: [BinarySearchService],
    }).compile();

    controller = module.get<BinarySearchController>(BinarySearchController);
    service = module.get<BinarySearchService>(BinarySearchService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('performBinarySearch', () => {
    it('should return the result of binary search from the service', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const targetValue = 7;
      const expectedResult = 'Iterative binary search: Element found at index 6';

      jest.spyOn(service, 'binarySearch').mockReturnValue(6);

      const result = controller.performBinarySearch();

      expect(result).toBe(expectedResult);
      expect(service.binarySearch).toHaveBeenCalledWith(sortedArray, targetValue);

    });

  });

  describe('performBinarySearchRecursive', () => {
    it('should return the result of binary search from the service', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const targetValue = 4;
      const expectedResult = 'Recursive binary search: Element found at index 3';

      jest.spyOn(service, 'binarySearchRecursive').mockReturnValue(3);

      const result = controller.performBinarySearchRecursive();

      expect(result).toBe(expectedResult);
      expect(service.binarySearchRecursive).toHaveBeenCalledWith(sortedArray, targetValue, 0, sortedArray.length - 1);

    });

  });


});
