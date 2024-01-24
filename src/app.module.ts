import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinarySearchModule } from './binary-search/binary-search.module';

@Module({
  imports: [BinarySearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
