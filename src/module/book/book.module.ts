import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from '@/module/book//interface/book.controller';
import { BOOK_REPOSITORY } from '@/module/book/application/repository/book.repository.interface';
import { BookRepository } from '@/module/book/infrastructure/book.repository';
import { BookSchema } from '@/module/book/infrastructure/book.schema';

@Module({
  imports: [TypeOrmModule.forFeature([BookSchema])],
  controllers: [BookController],
  providers: [
    {
      useClass: BookRepository,
      provide: BOOK_REPOSITORY,
    },
  ],
})
export class BookModule {}
