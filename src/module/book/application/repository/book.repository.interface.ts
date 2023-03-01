import { Book } from '@/module/book/domain/book.entity';

export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';

export interface IBookRepository {
  getAll(): Promise<Book[]>;
}
