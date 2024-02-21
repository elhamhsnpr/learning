import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { LinkedListService } from './linked_list.service';

@Controller('linked-list')
export class LinkedListController {

    constructor(private readonly linkedListService: LinkedListService<number>) { }

    @Get()
    getList(): number[] {
        return this.linkedListService.getAll();
    }

    @Post()
    addToList(@Body('data') data: number): number[] {
        return this.linkedListService.add(data)

    }

    @Get('search/:data')
    searchElement(@Param('data') data: number): boolean {
        return this.linkedListService.search(data);
    }


}
