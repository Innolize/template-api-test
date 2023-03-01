import { Author } from '@/module/author/domain/author.entity';

export class Book {
  id: number;
  title: string;
  author: Author;
}
