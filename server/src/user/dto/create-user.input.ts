import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserInput {
  @Field()
  readonly _id: string;

  @Field()
  readonly email: string;

  @Field()
  readonly username: string;

  @Field()
  readonly password: string;

  @Field()
  readonly createdAt: string;

  @Field({ nullable: true })
  readonly updatedAt: string;
}
