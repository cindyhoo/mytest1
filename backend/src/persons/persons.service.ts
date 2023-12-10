import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonEntity } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private personRepository: Repository<PersonEntity>,
  ) {}

  async findAll(): Promise<PersonEntity[]> {
    return this.personRepository.find();
  }
}