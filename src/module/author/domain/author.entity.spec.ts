import { Author } from './author.entity';

describe('Author', () => {
  let author: Author;

  beforeEach(() => {
    author = new Author();
  });

  describe('Author creation', () => {
    it('should have an undefined first name upon creation', async () => {
      expect(author.firstName).toStrictEqual(undefined);
    });
  });
});
