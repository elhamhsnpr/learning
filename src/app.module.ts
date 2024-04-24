import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinarySearchModule } from './binary-search/binary-search.module';
import { LinkedListService } from './linked_list/linked_list.service';
import { LinkedListController } from './linked_list/linked_list.controller';
import { LinkedListModule } from './linked_list/linked_list.module';
import { MergeSortController } from './merge_sort/merge_sort.controller';
import { MergeSortModule } from './merge_sort/merge_sort.module';
import { MergeSortService } from './merge_sort/merge_sort.service';

@Module({
  imports: [BinarySearchModule, LinkedListModule, MergeSortModule],
  controllers: [AppController, LinkedListController, MergeSortController],
  providers: [AppService, LinkedListService,MergeSortService],
})
export class AppModule { }
