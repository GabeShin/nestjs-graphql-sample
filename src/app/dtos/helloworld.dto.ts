import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from './common.dto';

@InputType()
export class HelloWorldInput {
  @Field(() => String)
  message: string;
}

@ObjectType()
export class HelloWorldOutput extends CommonOutput {}
