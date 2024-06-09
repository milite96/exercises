const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// person1 y person2 no son lo mismo porque en la línea 7 lo que realmente estamos señalando es que person2 es la referencia de person1, es decir, si alteramos person1 también afectaría a person2 y viceversa.
