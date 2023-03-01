import { Injectable } from '@nestjs/common';

import { AuthorDto } from '@/module/author/application/dto/author.dto';
import { Author } from '@/module/author/domain/author.entity';

@Injectable()
export class AuthorMapper {
  public map(source: Author): AuthorDto {
    return new AuthorDto(source.id, source.firstName, source.lastName);
  }
}
