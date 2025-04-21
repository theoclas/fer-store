const myName = 'Fernando';
const MyAge = 26;

const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const Fernando = new Persona(20, 'Fernando');

Fernando.getSummary();
