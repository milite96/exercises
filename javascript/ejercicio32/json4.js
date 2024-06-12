const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(
//   {
//     id: person.id,
//     age: person.age,
//   }
// );

const filter = { id: person.id, age: person.age }

// we do this step in order to create a real copy from the person object
const json = JSON.parse(JSON.stringify(filter));

console.log(json); // Should return: { id: 1, age: 25 }