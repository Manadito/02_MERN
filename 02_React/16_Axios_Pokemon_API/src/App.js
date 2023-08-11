import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]); // Initialize the pokemon data array state
  const [responseData, setResponseData] = useState(false); // Initialize the API response state as false

  useEffect(() => {
    if (responseData) {
      // If the response state is true, fetch me the pokemon API
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          setPokemons(response.data.results); // Substitute the empty initialized array with the resutls array
        })
        .catch(); // If there happens to be an error, then don't fetch me anything
      setResponseData(false);
    }
  }, [responseData]); // We are dependent on responseData as it is being used as a parameter in the conditional statement

  const handleOnClick = (e) => {
    // 2. Instructions that allow me to get a response from the API once the button is clicked
    setResponseData(true);
  };
  // JSX
  return (
    <div>
      <div>
        <button onClick={handleOnClick}>Fetch Pokemon</button>{" "}
        {/* 1. Obtain the button's event and use it to call a function when clicked */}
      </div>
      <div>
        <ul>
          {pokemons.map((index, key) => (
            <li key={key}>{index.name}</li> // Create a list containing the pokemons' names using the map method
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
