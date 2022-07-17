import { Owner } from './../owners/entities/owner.entity';
import { ObjectType, Int, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field(() => Int)
  ownerId: number;

  @Field(() => Owner)
  @ManyToOne(() => Owner, (owner) => owner.pets, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
  owner: Owner;
}
