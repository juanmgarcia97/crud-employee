export default class Employee {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private secondLastName?: string
  ) {}

  get getId(): string {
    return this.id;
  }

  set setId(value: string) {
    this.id = value;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  set setFirstName(value: string) {
    this.firstName = value;
  }

  get getLastName(): string {
    return this.lastName;
  }

  set setLastName(value: string) {
    this.lastName = value;
  }

  get getSecondLastName(): string {
    return this.secondLastName ?? '';
  }

  set setSecondLastName(value: string) {
    this.secondLastName = value;
  }
}
