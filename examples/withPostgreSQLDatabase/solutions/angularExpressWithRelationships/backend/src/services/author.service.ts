import { injectable } from "tsyringe";
import { Author } from "../models/author.model";
import { AuthorInput } from "../inputs/author.input";

@injectable()
export class AuthorService {
  async getAll(): Promise<Author[]> {
    return Author.findAll();
  }

  async getOne(id: number): Promise<Author> {
    return Author.findOne({ where: { id } });
  }

  async insert(data: AuthorInput): Promise<Author> {
    return Author.create(data);
  }

  async update(id: number, data: AuthorInput): Promise<Author> {
    Author.update(data, { where: { id } });
    return this.getOne(id);
  }

  async delete(id: number): Promise<number> {
    return Author.destroy({ where: { id } });
  }
}
