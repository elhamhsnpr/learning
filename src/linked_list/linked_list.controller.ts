import { Body, Controller, Get, Post } from '@nestjs/common';
import { LinkedListService } from './linked_list.service';

@Controller('linked-list')
export class LinkedListController {

    constructor(private readonly linkedListService: LinkedListService<number>) { }

    @Get()
    getList(): number[] {
        return this.linkedListService.getAll();
    }

    @Post()
    addToList(@Body() data: number): void {
        this.linkedListService.add(data)
    }
}
