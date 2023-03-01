import { Book } from './book.entity';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book();
  });

  describe('Book creation', () => {
    it('should have an undefined title upon creation', async () => {
      expect(book.title).toStrictEqual(undefined);
    });
  });
});
