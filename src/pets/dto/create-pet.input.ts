import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlphanumeric } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlphanumeric()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
