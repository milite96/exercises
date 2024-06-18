import Age from "../age/Age";

function Welcome({ name = "guest", age }) {
  console.log(age);
  return (
    <ul>
      <li>Welcome, {name}!</li>
      <Age age={age} />
      {age > 18 && <Age age={age} />}
      {age != null && age.length == 0 && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name == "John" && <Age age={age} />}
    </ul>
  );
}

export default Welcome;
