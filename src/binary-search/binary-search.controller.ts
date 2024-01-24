// src/binary-search/binary-search.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';
import { BinarySearchService } from './binary-search.service';

@Controller('binary-search')
export class BinarySearchController {
    constructor(@Inject(BinarySearchService) private readonly binarySearchService: BinarySearchService) { }

    @Get()
    performBinarySearch(): string {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const targetValue = 7;

        const result = this.binarySearchService.binarySearch(sortedArray, targetValue);

        if (result !== -1) {
            return `Element found at index ${result}`;
        } else {
            return 'Element not found in the array';
        }
    }
}

