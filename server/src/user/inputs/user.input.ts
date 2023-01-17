import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly email: string;
}

@InputType()
export class FindUserInput {
  @Field()
  readonly _id: string;
}

@InputType()
export class UpdateUserInput {
  @Field()
  readonly _id: string;

  @Field()
  readonly email: string;
}
