import "./App.css";
import AlertClock from "./components/alertClock/AlertClock";
import Clock from "./components/clock/Clock";
import Counter from "./components/counter/Counter";
import MouseClicker from "./components/mouseClicker/MouseClicker";

import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <>
      <Welcome /> {/* comportamiento "default" */}
      <Welcome name={<strong>Victor</strong>} age={27} />
      <Welcome name="John" age={36} />
      <Welcome age={80} />
      <Welcome age={17} />
      <br />
      <AlertClock />
      <br />
      <Counter initialValue={12} />
      <br />
      <Clock />
      <br />
      <MouseClicker />
    </>
  );
}

export default App;
