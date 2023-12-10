import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persons')
export class PersonEntity {
  @PrimaryGeneratedColumn()
  personid: number;

  @Column({
    name: 'lastname',
  })
  lastname: string;
  @Column({
    name: 'firstname',
  })
  firstname: string;
  @Column({
    name: 'address',
  })
  address: string;
  @Column({
    name: 'city',
  })
  city: string;
}