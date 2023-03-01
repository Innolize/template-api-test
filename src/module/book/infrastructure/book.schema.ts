import { EntitySchema } from 'typeorm';

import { AuthorSchema } from '@/module/author/infrastructure/author.schema';
import { Book } from '@/module/book/domain/book.entity';

export const BookSchema = new EntitySchema<Book>({
  name: 'Book',
  target: Book,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
  },
  relations: {
    author: {
      type: 'many-to-one',
      target: AuthorSchema,
    },
  },
});
