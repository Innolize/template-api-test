import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { IBookRepository } from '@/module/book/application/repository/book.repository.interface';
import { Book } from '@/module/book/domain/book.entity';

@Injectable()
export class BookRepository implements IBookRepository {
  private readonly repository: Repository<Book>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Book);
  }

  async getAll(): Promise<Book[]> {
    return this.repository.find({
      relations: ['author'],
    });
  }
}
