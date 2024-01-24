// src/binary-search/binary-search.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';
import { BinarySearchService } from './binary-search.service';

@Controller('binary-search')
export class BinarySearchController {
    constructor(@Inject(BinarySearchService) private readonly binarySearchService: BinarySearchService) { }

    @Get('/iterative')
    performBinarySearch(): string {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const targetValue = 7;

        const result = this.binarySearchService.binarySearch(sortedArray, targetValue);

        if (result !== -1) {
            return `Iterative binary search: Element found at index ${result}`;
        } else {
            return 'Iterative binary search: Element not found in the array';
        }
    }

    @Get('/recursive')
    performBinarySearchRecursive(): string {
        const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const targetValue = 4;

        const result = this.binarySearchService.binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

        if (result !== -1) {
            return `Recursive binary search: Element found at index ${result}`;
        } else {
            return 'Recursive binary search: Element not found in the array';
        }

    }
}

