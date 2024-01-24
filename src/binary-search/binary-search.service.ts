import { Injectable } from '@nestjs/common';

@Injectable()
export class BinarySearchService {
    binarySearch(arr: number[], target: number): number {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2)
            const midVal = arr[mid]

            if (midVal == target) {
                return mid;
            } else if (mid < target) {

                low = mid + 1
            } else {
                high = mid - 1
            }

        }
        return -1;
    }

    binarySearchRecursive(arr: number[], target: number, low: number, high: number): number {

        if (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midVal = arr[mid];

            if (midVal == target) {
                return mid;

            } else if (mid < target) {
                return this.binarySearchRecursive(arr, target, mid + 1, high);
            } else {
                return this.binarySearchRecursive(arr, target, low, mid - 1);
            }


        }

        return -1


    }
}
