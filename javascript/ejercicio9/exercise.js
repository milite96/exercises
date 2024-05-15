const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

for (const key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

// // otra manera de hacerlo
// for(let key in person){
//   console.log(`${key}: ${person[key]}`);
// }

// // otra manera de hacerlo
// for (let index = 0; index < Object.keys(person).length; index++) {
//   console.log(`${Object.keys(person)[index]}: ${Object.values(person)[index]}`)
// }


