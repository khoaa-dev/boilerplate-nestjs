// /src/posts/infrastructure/persistence/relational/entities/post.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityRelationalHelper } from '@/utils/relational-entity-helper';

@Entity({
  name: 'users',
})
export class UserEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  // Here any fields that you need
}
