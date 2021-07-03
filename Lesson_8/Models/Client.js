export default class Client {
  constructor(surname, name, lastname) {
    this.lastname = lastname;
    this.name = name;
    this.surname = surname;
  }

  //вычислимое свойство
  get fullname() {
    return `${this.surname} ${this.name} ${this.lastname}`;
  }
}
