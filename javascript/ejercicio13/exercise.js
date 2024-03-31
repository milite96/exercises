const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

function getAges() {
  let personAges = [];
  for (let index = 0; index < persons.length; index++) {
    personAges.push(persons[index].age);
    // console.log(personAges[index]);
  }
  return personAges;
}

function addAges(agesArray) {
  let totalAges = 0;
  for (let index = 0; index < persons.length; index++) {
    totalAges = totalAges + agesArray[index];
    // totalAges += agesArray[index];
  }
  return totalAges;
}

const addedAges = addAges(getAges());

function ageAverage(listOfAges, numberOfAges) {
  let roundedAgeAverage = Math.round(listOfAges / numberOfAges);
  return console.log(roundedAgeAverage);
}

// ageAverage(addedAges, persons.length); // uncomment para probar la funcion



// una manera mas simple de hacerlo:

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return Math.round(totalAge / persons.length);
}

const average = calculateAverageAge(persons);
// console.log(persons);
console.log(average);
