import { DataSource } from 'typeorm';
import { PersonEntity } from './entities/person.entity';

export const personProviders = [
  {
    provide: 'PERSON_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PersonEntity),
    inject: ['DATA_SOURCE'],
  },
];