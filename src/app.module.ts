import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinarySearchModule } from './binary-search/binary-search.module';
import { LinkedListService } from './linked_list/linked_list.service';
import { LinkedListController } from './linked_list/linked_list.controller';
import { LinkedListModule } from './linked_list/linked_list.module';

@Module({
  imports: [BinarySearchModule, LinkedListModule],
  controllers: [AppController, LinkedListController],
  providers: [AppService, LinkedListService],
})
export class AppModule { }
