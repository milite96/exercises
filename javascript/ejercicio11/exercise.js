// Una manera de hacerlo:

function adultFilter(persons) {
  let adultList = [];
  for (let index = 0; index < persons.length; index++) {
    if (persons[index].age >= 18) {
      adultList.push(persons[index]);
    }
  }
  return adultList;
}

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

const adults = adultFilter(persons);
// console.log(adults);


// otra manera mas simple de hacerlo:

function adultFilter2(persons) {
  let adultList = persons.filter((person) => {
    return person.age >= 18;
  });
  return adultList;
}

console.log(adultFilter2(persons));
