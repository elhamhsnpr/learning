import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListController } from './linked_list.controller';
import { LinkedListService } from './linked_list.service';

describe('LinkedListController', () => {
  let controller: LinkedListController;
  let service: LinkedListService<number>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedListController],
      providers: [LinkedListService]
    }).compile();

    controller = module.get<LinkedListController>(LinkedListController);
    service = module.get<LinkedListService<number>>(LinkedListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /linked-list', () => {
    it('should return a array of elements from the linked list', () => {

      jest.spyOn(service, 'getAll').mockReturnValue([1, 2, 3]);
      const result = controller.getList();

      expect(result).toEqual([1, 2, 3]);


    })
  })

  describe('Post /linked_list', () => {
    it('should add an element into the linked list', () => {
      
      const data = 42;
      controller.addToList(data);

      expect(service.getAll()).toEqual([42]);

    })
  })

});
