import "./App.css";
import AlertClock from "./components/alertClock/AlertClock";

import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <Welcome /> {/* comportamiento "default" */}
      <Welcome name={<strong>Victor</strong>} age={27} />
      <Welcome name="John" age={36} />
      <Welcome age={80} />
      <Welcome age={17} />
      <br></br>
      <AlertClock />
    </>
  );
}

export default App;
