import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entities/person.entity';
import { DatabaseModule } from 'src/database/database.module';
import { personProviders } from './persons.providers';

@Module({
  imports: [
DatabaseModule
  ],
  controllers: [PersonsController],
  providers: [
    ...personProviders,
    PersonsService],
})
export class PersonsModule {}
