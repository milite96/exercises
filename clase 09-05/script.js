class Person {
    constructor(firstName, age){
        this.firstName = firstName;
        this.age = age;
    }

    get personAge(){
        return this.age
    }

    set personAge(newAge){
        this.age = newAge;
    }
}

const person2 = new Person("Rodriguez", 21) 
const person3 = new Person("Milite", 27)
const person4 = new Person("Castillo", 30)

const person5 = {
    firstName: "Juan",
    age: 40,
}

console.log(person2.personAge);
person2.personAge = 25;
console.log(person2);