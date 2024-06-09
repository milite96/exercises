class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newValue) {
        this._firstName = newValue;
    }
    set lastName(newValue) {
        this._lastName = newValue;
    }
    set age(newValue) {
        this._age = newValue;
    }

    get name() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }


    static fromObject(anyObj) {
        return new Person(anyObj.firstName, anyObj.lastName, anyObj.age)
    }
}

let person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);