import { inject, injectable } from 'inversify';
import employee from '../domain/employee';
import { DI } from '../domain/types';
import EmployeeRepository from '../repository/employee.repository';
import EmployeeService from './employee.service';

@injectable()
export default class EmployeeServiceImpl implements EmployeeService {
  @inject(DI.EmployeeRepository) employeeRepository!: EmployeeRepository;

  async findAll(): Promise<employee[]> {
    return await this.employeeRepository.findAll();
  }

  async findById(id: string): Promise<employee> {
    return await this.employeeRepository.findById(id);
  }


  async create(employee: employee): Promise<employee> {
    return await this.employeeRepository.create(employee);
  }

  async update(id: string, employee: employee): Promise<employee> {
    return await this.employeeRepository.update(id, employee);
  }

  async delete(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
