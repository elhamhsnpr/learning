import { Module } from '@nestjs/common';
import { MergeSortController } from './merge_sort.controller';
import { MergeSortService } from './merge_sort.service';

@Module({
    controllers: [MergeSortController],
    providers: [MergeSortService],
})
export class MergeSortModule { }
