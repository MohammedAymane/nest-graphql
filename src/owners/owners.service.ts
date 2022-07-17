import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}
  create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    return this.ownerRepository.save(createOwnerInput);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

  update(updateOwnerInput: UpdateOwnerInput) {
    return this.ownerRepository.update(
      { id: updateOwnerInput.id },
      updateOwnerInput,
    );
  }

  remove(id: number) {
    console.log(id);
    return this.ownerRepository.delete({ id });
  }
}
