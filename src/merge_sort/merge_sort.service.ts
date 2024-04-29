import { Injectable } from '@nestjs/common';

@Injectable()
export class MergeSortService {

    sort(array: number[]): number[] {

        if (array.length <= 1) {
            return array
        }

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return this.merge(this.sort(left), this.sort(right))
    }

    private merge(left: number[], right: number[]): number[] {

        let result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;


        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex), right.slice(rightIndex))
    }


}
