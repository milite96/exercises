function Age({ age = "unknown" }) {
  return (
    age > 18 || typeof age === "string" ?
      <li>Your age is {age}</li>
      :
      <li>You are very young!</li>
  )
}

export default Age;
