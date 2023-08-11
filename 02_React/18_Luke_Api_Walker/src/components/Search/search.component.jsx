import React, { useState } from "react";

const Search = (props) => {
  const { onSearch } = props;
  const [selectedPath, setSelectedPath] = useState("/people");
  const [id, setId] = useState("");

  return (
    <div>
      {" "}
      {/* Avoid having a <form> wrapper unless you have a handler for it preventing its defaults */}
      <label htmlFor="resource">Select a field</label>
      <select
        value={selectedPath}
        onChange={(e) => setSelectedPath(e.target.value)} // This changes the selected path
        name="resource"
        id="resource"
      >
        <option value={"/people"}>People</option>
        <option value={"/planets"}>Planets</option>
        <option value={"/films"}>Films</option>
        <option value={"/vehicles"}>Vehicles</option>
      </select>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button
        onClick={() => {
          onSearch(selectedPath, id);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
