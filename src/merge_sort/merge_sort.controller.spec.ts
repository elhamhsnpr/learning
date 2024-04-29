import { Test, TestingModule } from '@nestjs/testing';
import { MergeSortController } from './merge_sort.controller';
import { MergeSortService } from './merge_sort.service';

describe('MergeSortController', () => {
  let controller: MergeSortController;
  let service: MergeSortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MergeSortController],
      providers: [MergeSortService],
    }).compile();

    controller = module.get<MergeSortController>(MergeSortController);
    service = module.get<MergeSortService>(MergeSortService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a sorted array', () => {

    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    jest.spyOn(service, 'sort').mockReturnValue(sortedArray);

    const result = controller.getSorteArray();

    expect(result).toEqual(sortedArray);
  })
});
