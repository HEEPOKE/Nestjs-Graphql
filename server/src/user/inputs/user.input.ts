import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly email: string;
}

@InputType()
export class FindUserInput {
  @Field()
  readonly id: number;
}

@InputType()
export class UpdateUserInput {
  @Field()
  readonly id: number;

  @Field()
  readonly email: string;
}
