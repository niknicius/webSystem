import { Author } from "../models/author.model";
import { Field, InputType } from "type-graphql";
import { RecursivePartial } from "sequelize-typescript/dist/shared/types";

@InputType()
export class AuthorInput implements RecursivePartial<Author> {

  @Field({nullable: true})
  id: number

  @Field()
  name: string;

}
