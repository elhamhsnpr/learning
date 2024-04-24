import { Controller, Get } from '@nestjs/common';
import { MergeSortService } from './merge_sort.service';

@Controller('merge-sort')
export class MergeSortController {

    constructor(private readonly mergeSortService: MergeSortService) { }

    @Get()
    getSorteArray(): number[] {

        const unsortedArray = [5, 3, 8, 4, 2, 1, 9, 7, 6];
        const sortedArray = this.mergeSortService.sort(unsortedArray)
        return sortedArray
    }
}
