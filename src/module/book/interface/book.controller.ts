import { Controller, Get, Inject } from '@nestjs/common';

import {
  BOOK_REPOSITORY,
  IBookRepository,
} from '@/module/book/application/repository/book.repository.interface';
import { Book } from '@/module/book/domain/book.entity';

@Controller('book')
export class BookController {
  constructor(
    @Inject(BOOK_REPOSITORY)
    private readonly repository: IBookRepository,
  ) {}

  @Get('/')
  async findAll(): Promise<Book[]> {
    return this.repository.getAll();
  }
}
