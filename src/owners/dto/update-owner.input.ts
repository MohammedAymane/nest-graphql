import { Pet } from '../../pets/pet.entity';
import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';
@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Column()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name?: string;
}
