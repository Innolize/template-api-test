import { join } from 'path';
import * as request from 'supertest';

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { loadFixtures } from '@data/fixture/util/loader';

import { AppModule } from '@/module/app.module';
import { BookModule } from '@/module/book/book.module';

describe('Book', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, BookModule],
    }).compile();

    await loadFixtures(
      `${__dirname}/fixture`,
      join(__dirname, '..', '..', '..', '..', '..', 'ormconfig.ts'),
    );

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET books', async () => {
    return request(app.getHttpServer())
      .get('/book')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'Title one',
          author: { id: 1, firstName: 'John', lastName: 'Doe' },
        },
        {
          id: 2,
          title: 'Title two',
          author: { id: 2, firstName: 'Jane', lastName: 'Doe' },
        },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
