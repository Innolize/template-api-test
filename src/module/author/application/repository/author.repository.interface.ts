import { Author } from '@/module/author/domain/author.entity';

export const AUTHOR_REPOSITORY = 'AUTHOR_REPOSITORY';

export interface IAuthorRepository {
  getAll(): Promise<Author[]>;
}
