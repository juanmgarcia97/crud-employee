import Employee from '../../../domain/employee';
import EmployeeEntity from '../entity/employee.entity';

export default class EmployeeMapper {
  static toDomain(entity: EmployeeEntity): Employee {
    return new Employee(
      entity.id,
      entity.firstName,
      entity.lastName,
      entity.secondLastName
    );
  }

  static toEntity(domain: Employee): EmployeeEntity {
    const entity = new EmployeeEntity();
    entity.id = domain.getId;
    entity.firstName = domain.getFirstName;
    entity.lastName = domain.getLastName;
    entity.secondLastName = domain.getSecondLastName;
    return entity;
  }

  static toDomainList(entities: EmployeeEntity[]): Employee[] {
    return entities.map(EmployeeMapper.toDomain);
  }
}
