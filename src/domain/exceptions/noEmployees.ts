export default class NoEmployees extends Error {
  constructor() {
    super('No hay empleados');
  }
}
