import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../models/author.model";
import { AuthorInput } from "../inputs/author.input";
import { container } from "tsyringe";
import { AuthorService } from "../services/author.service";

@Resolver()
export class AuthorResolver {
  AuthorService: AuthorService;

  constructor() {
    this.AuthorService = container.resolve(AuthorService);
  }

  @Query(() => Author)
  async findOneAuthor(@Arg("id") id: number): Promise<Author> {
    return this.AuthorService.getOne(id);
  }

  @Query(() => [Author])
  async findAllAuthors(): Promise<Author[]> {
    return this.AuthorService.getAll();
  }

  @Mutation(() => Author)
  async createAuthor(@Arg("data") data: AuthorInput): Promise<Author> {
    return this.AuthorService.insert(data);
  }

  @Mutation(() => Author)
  async updateAuthor(
    @Arg("id") id: number,
    @Arg("data") data: AuthorInput
  ): Promise<Author> {
    return this.AuthorService.update(id, data);
  }

  @Mutation(() => Number)
  async deleteAuthor(@Arg("id") id: number): Promise<number> {
    return this.AuthorService.delete(id);
  }
}
