import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class UserModel {
  // @Field(() => Number)
  // id: number;

  // @Field(() => Date)
  // createdAt: Date;

  // @Field(() => Date)
  // updatedAt: Date;

  @Field(() => String)
  name: string;
}
