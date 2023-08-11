import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [ageChangeJane, setAgeChangeJane] = useState(45);
  const [ageChangeJohn, setAgeChangeJohn] = useState(88);

  const handleAgeChangeJane = (e) => {
    setAgeChangeJane(ageChangeJane + 1);
  };

  const handleAgeChangeJohn = (e) => {
    setAgeChangeJohn(ageChangeJohn + 1);
  };

  return (
    <div>
      <div>
        <h1>Doe, Jane</h1>
        <p>Age: {ageChangeJane} </p>
        <p>Hair Color: Black</p>
        <button onClick={handleAgeChangeJane}>
          Birthday button for Jane Doe
        </button>
      </div>
      <div>
        <h1>Smith, John</h1>
        <p>Age: {ageChangeJohn} </p>
        <p>Hair Color: Black</p>
        <button onClick={handleAgeChangeJohn}>
          Birthday button for John Smith
        </button>
      </div>
    </div>
  );
}

export default App;
