import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import Employee from '../domain/employee';
import EmployeeNotFound from '../domain/exceptions/employeeNotFound';
import NoEmployees from '../domain/exceptions/noEmployees';
import EmployeeRepository from '../repository/employee.repository';
import { AppDataSource } from './persistence/db.config';
import EmployeeEntity from './persistence/entity/employee.entity';
import EmployeeMapper from './persistence/mapper/employee.mapper';

@injectable()
export default class EmployeeRepositoryImpl implements EmployeeRepository {
  private employeeRepositoryORM: Repository<EmployeeEntity>;

  constructor() {
    this.employeeRepositoryORM = AppDataSource.getRepository(EmployeeEntity);
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.employeeRepositoryORM.find();
    if(!employees) throw new NoEmployees();
    return EmployeeMapper.toDomainList(employees);
  }

  async findById(id: string): Promise<Employee> {
    const employee = await this.employeeRepositoryORM.findOneBy({ id });
    if (!employee) throw new EmployeeNotFound(id);
    return EmployeeMapper.toDomain(employee);
  }

  async create(employee: Employee): Promise<Employee> {
    if (!employee) throw new Error('Empleado tiene propiedades inválidas');
    const employeeEntity = await this.employeeRepositoryORM.save(
      EmployeeMapper.toEntity(employee)
    );
    return EmployeeMapper.toDomain(employeeEntity);
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    await this.findById(id);
    employee.setId = id;
    await this.employeeRepositoryORM.update(
      id,
      EmployeeMapper.toEntity(employee)
    );
    return employee;
  }

  async delete(id: string): Promise<void> {
    const employee = await this.findById(id);
    await this.employeeRepositoryORM.remove(EmployeeMapper.toEntity(employee));
  }
}

