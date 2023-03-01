import { EntitySchema } from 'typeorm';

import { Author } from '@/module/author/domain/author.entity';

export const AuthorSchema = new EntitySchema<Author>({
  name: 'Author',
  target: Author,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
});
