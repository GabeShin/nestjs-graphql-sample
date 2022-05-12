import { Args, Query, Resolver } from '@nestjs/graphql';
import { HelloWorldInput, HelloWorldOutput } from './app/dtos/helloworld.dto';

@Resolver()
export class AppResolver {
  @Query(() => HelloWorldOutput)
  test(@Args('input') input: HelloWorldInput): HelloWorldOutput {
    return {
      ok: true,
      message: input.message,
    };
  }
}
