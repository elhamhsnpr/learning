import { Module } from '@nestjs/common';
import { LinkedListController } from './linked_list.controller';
import { LinkedListService } from './linked_list.service';

@Module({
    controllers: [LinkedListController],
    providers: [LinkedListService]
})
export class LinkedListModule { }
