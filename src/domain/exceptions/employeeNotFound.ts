export default class EmployeeNotFound extends Error {
  constructor(id: string, code?: number) {
    let message = '';
    code
      ? (message = `El empleado con código ${code} no existe`)
      : (message = `El empleado con id ${id} no existe`);
    super(message);
  }
}
