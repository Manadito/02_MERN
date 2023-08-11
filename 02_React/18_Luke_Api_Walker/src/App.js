import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/search.component";
import Results from "./components/Results/results.component";

function App() {
  // Setting up the state changes for the input field
  const [data, setData] = useState(null);

  // Receiving information from the API using the useEffect hook and Axios
  const search = (selectedPath, id) => {
    if (selectedPath && id) {
      axios
        .get(`https://swapi.dev/api/${selectedPath}/${id}`)
        .then((response) => {
          setData(response.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div>
        <Search onSearch={search} />
      </div>
      <div>
        <Results value={data} />
      </div>
    </div>
  );
}

export default App;
