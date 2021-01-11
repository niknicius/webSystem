import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";

@Table
@ObjectType({ description: "The Author model" })
export class Author extends Model<Author> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  @Field(() => ID)
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { nullable: false })
  name: string;

}
