import { Expose } from 'class-transformer';

export class AuthorDto {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}

  @Expose()
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
