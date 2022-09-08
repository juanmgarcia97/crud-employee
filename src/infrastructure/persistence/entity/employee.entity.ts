import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleado')
export default class EmployeeEntity {
 
  @PrimaryColumn({
    name: 'cedula',
    type: 'varchar',
    length: 10,
    nullable: false,
    unique: true,
  })
  id!: string;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName!: string;

  @Column({
    name: 'apellido1',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  lastName!: string;

  @Column({
    name: 'apellido2',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  secondLastName!: string;
}
