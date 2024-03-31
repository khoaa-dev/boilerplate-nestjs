import { instanceToPlain } from 'class-transformer';
import { AfterLoad, BaseEntity } from 'typeorm';

/*
 * The purpose of this class is to provide a helper method toJSON for converting entities to plain JavaScript objects,
 * and to automatically set the name of the entity class after it has been loaded from the database.
 *
 * @class EntityRelationalHelper
 * @description This class is used to help with the serialization of entities.
 * @method setEntityName
 * @method toJSON
 * @returns {Record<string, any>}
 */
export class EntityRelationalHelper extends BaseEntity {
  __entity?: string;

  @AfterLoad()
  setEntityName(): void {
    this.__entity = this.constructor.name;
  }

  toJSON(): Record<string, any> {
    return instanceToPlain(this);
  }
}
