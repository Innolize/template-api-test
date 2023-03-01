import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorController } from '@/module/author//interface/author.controller';
import { AuthorMapper } from '@/module/author/application/mapper/author.mapper';
import { AUTHOR_REPOSITORY } from '@/module/author/application/repository/author.repository.interface';
import { AuthorRepository } from '@/module/author/infrastructure/author.repository';
import { AuthorSchema } from '@/module/author/infrastructure/author.schema';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorSchema])],
  controllers: [AuthorController],
  providers: [
    {
      useClass: AuthorRepository,
      provide: AUTHOR_REPOSITORY,
    },
    AuthorMapper,
  ],
})
export class AuthorModule {}
