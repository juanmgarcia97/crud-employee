import { Container } from 'inversify';
import { DI } from './domain/types';
import EmployeeRepositoryImpl from './infrastructure/employee.repository.impl';
import EmployeeRepository from './repository/employee.repository';
import EmployeeService from './service/employee.service';
import EmployeeServiceImpl from './service/employee.service.impl';

export const container = new Container();

container
  .bind<EmployeeRepository>(DI.EmployeeRepository)
  .to(EmployeeRepositoryImpl);
container.bind<EmployeeService>(DI.EmployeeService).to(EmployeeServiceImpl);

