// /src/posts/infrastructure/persistence/relational/entities/post.entity.ts

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EntityRelationalHelper } from '@/utils/relational-entity-helper';
import { Category } from '@/database/entities/Category.entity';

@Entity({
  name: 'posts',
})
export class Post extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // @Column()
  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;

  // Here any fields that you need
}
