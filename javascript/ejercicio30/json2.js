class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const parsedJson = JSON.parse(json)
    const { id: jsonId, firstName: jsonName, lastName: jsonLastName, age: jsonAge } = parsedJson;
      return new Person(jsonId, jsonName, jsonLastName, jsonAge)
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
console.log("is developer an instance of Person:", developer instanceof Person);