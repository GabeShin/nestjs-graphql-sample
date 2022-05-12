import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonOutput {
  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Boolean)
  ok: boolean;
}
