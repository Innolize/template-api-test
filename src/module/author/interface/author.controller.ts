import { Controller, Get, Inject } from '@nestjs/common';

import { BaseController } from '@/common/interface/base.controller';
import { AuthorDto } from '@/module/author/application/dto/author.dto';
import { AuthorMapper } from '@/module/author/application/mapper/author.mapper';
import {
  AUTHOR_REPOSITORY,
  IAuthorRepository,
} from '@/module/author/application/repository/author.repository.interface';

@Controller('author')
export class AuthorController extends BaseController {
  constructor(
    @Inject(AUTHOR_REPOSITORY)
    private readonly repository: IAuthorRepository,
    private readonly mapper: AuthorMapper,
  ) {
    super();
  }

  @Get('/')
  async findAll(): Promise<AuthorDto[]> {
    const authors = await this.repository.getAll();
    return authors.map((author) => this.mapper.map(author));
  }
}
