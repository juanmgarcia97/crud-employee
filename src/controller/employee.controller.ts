import { Request, Response as ExpressResponse } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import Employee from '../domain/employee';
import { DI } from '../domain/types';
import EmployeeService from '../service/employee.service';
import Response from './response';

@controller('/employees')
export default class EmployeeController extends BaseHttpController {
  constructor(
    @inject(DI.EmployeeService) private employeeService: EmployeeService
  ) {
    super();
  }

  @httpGet('/')
  private async findAll(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const employees = await this.employeeService.findAll();
    Response.ok(res, employees, 'Listado de empleados obtenido satisfactoriamente');
  }

  @httpGet('/:id')
  private async findById(
    @requestParam('id') id: string,
    @response() res: ExpressResponse
  ) {
    const employee = await this.employeeService.findById(id);
    Response.ok(res, employee, 'Empleado obtenido satisfactoriamente');
  }

  @httpPost('/')
  private async create(
    @request() req: Request,
    @response() res: ExpressResponse
  ) {
    const employeeObject = new Employee(
      req.body.id,
      req.body.firstName,
      req.body.lastName,
      req.body.secondLastName
    );
    const employee = await this.employeeService.create(employeeObject);
    Response.created(res, employee, 'Empleado creado satisfactoriamente');
  }

  @httpPut('/:id')
  private async update(
    @request() req: Request,
    @requestParam('id') id: string,
    @response() res: ExpressResponse
  ) {
    const employeeObject = new Employee(
      req.body.id,
      req.body.firstName,
      req.body.lastName,
      req.body.secondLastName
    );
    const employee = await this.employeeService.update(id, employeeObject);
    Response.ok(res, employee, 'Empleado actualizado satisfactoriamente');
  }

  @httpDelete('/:id')
  private async remove(
    @requestParam('id') id: string,
    @response() res: ExpressResponse
  ) {
    await this.employeeService.delete(id);
    Response.ok(res, id, 'Empleado eliminado satisfactoriamente');
  }
}
