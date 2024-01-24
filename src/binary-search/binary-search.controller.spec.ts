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
      const expectedResult = 'Element found at index 6';

      jest.spyOn(service, 'binarySearch').mockReturnValue(6);

      const result = controller.performBinarySearch();

      expect(result).toBe(expectedResult);
      expect(service.binarySearch).toHaveBeenCalledWith(sortedArray, targetValue);

    });

    // it('should handle the case when the element is not found in the array', () => {
    //   const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   const targetValue = 20;
    //   const expectedResult = 'Element not found in the array';

    //   // Mock the binarySearch method of the service
    //   jest.spyOn(service, 'binarySearch').mockReturnValue(-1);

    //   // Call the controller method
    //   const result = controller.performBinarySearch();

    //   expect(result).toBe(expectedResult);
    //   expect(service.binarySearch).toHaveBeenCalledWith(sortedArray, targetValue);
    // });
  });


});
