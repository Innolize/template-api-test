import { join } from 'path';
import * as request from 'supertest';

import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { loadFixtures } from '@data/fixture/util/loader';

import { AppModule } from '@/module/app.module';
import { AuthorModule } from '@/module/author/author.module';

describe('Author', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, AuthorModule],
    }).compile();

    await loadFixtures(
      `${__dirname}/fixture`,
      join(__dirname, '..', '..', '..', '..', '..', 'ormconfig.ts'),
    );

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET authors', () => {
    return request(app.getHttpServer())
      .get('/author')
      .expect(200)
      .expect([
        { id: 1, firstName: 'John', lastName: 'Doe', fullName: 'John Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', fullName: 'Jane Doe' },
      ]);
  });

  afterAll(async () => {
    await app.close();
  });
});
