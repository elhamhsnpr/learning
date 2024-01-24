import { Module } from '@nestjs/common';
import { BinarySearchService } from './binary-search.service';
import { BinarySearchController } from './binary-search.controller';

@Module({
  providers: [BinarySearchService],
  controllers: [BinarySearchController]
})
export class BinarySearchModule {}
