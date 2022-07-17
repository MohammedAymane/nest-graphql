import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownersService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'owners' })
  findAll() {
    return this.ownersService.findAll();
  }

  @Query(() => Owner, { name: 'owner' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ownersService.findOne(id);
  }

  @Mutation(() => Owner)
  async updateOwner(
    @Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput,
  ) {
    await this.ownersService.update(updateOwnerInput);
    return this.ownersService.findOne(updateOwnerInput.id);
  }

  @Mutation(() => Owner)
  async removeOwner(@Args('id', { type: () => Int }) id: number) {
    const data = await this.ownersService.findOne(id);
    await this.ownersService.remove(id);
    return data;
  }
}
