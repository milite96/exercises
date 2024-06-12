class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
// esto es un objeto creado a partir de una clase
console.log(developer);

// esto es el mismo objeto en formato JSON
const developerJSON= JSON.stringify(developer)
console.log(developerJSON);