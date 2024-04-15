import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListService } from './linked_list.service';

describe('LinkedListService', () => {
  let Service: LinkedListService<number>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedListService],
    }).compile();

    Service = module.get<LinkedListService<number>>(LinkedListService);
  });

  it('should be defined', () => {
    expect(Service).toBeDefined();
  });

  describe('add', () => {

    it('should add element to the linked list', () => {

      Service.add(1);
      Service.add(2);

      const list = Service.getAll();
      expect(list).toEqual([1, 2]);
    })

  })

  describe('search', () => {
    it('should return true if the element exists in the linked list', () => {

      Service.add(12);

      const result = Service.search(12);
      expect(result).toEqual(true);
    })
  })

  describe('search', () => {
    it('should return false if the element does not exists in the linked list', () => {

      Service.add(12);

      const result = Service.search(15);
      expect(result).toEqual(false);
    })
  })

  describe('remove', () => {
    it('should remove an item from the linnked list', () => {

      Service.add(12);
      Service.add(15);

      Service.remove(12);
      const list = Service.getAll();
      expect(list).toEqual([15]);
    })

  })



});
