// /src/posts/infrastructure/persistence/relational/entities/post.entity.ts

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EntityRelationalHelper } from '@/utils/relational-entity-helper';
import { Post } from '@/database/entities/Post.entity';

@Entity({
  name: 'categories',
})
export class Category extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // @Column()
  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];

  // Here any fields that you need
}
