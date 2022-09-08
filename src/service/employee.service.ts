import Employee from '../domain/employee';

export default interface EmployeeService {
  findAll(): Promise<Employee[]>;
  findById(id: string): Promise<Employee>;
  create(employee: Employee): Promise<Employee>;
  update(id: string, employee: Employee): Promise<Employee>;
  delete(id: string): Promise<void>;
}