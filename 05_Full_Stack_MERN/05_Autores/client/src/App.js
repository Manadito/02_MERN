import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./views/main.view";
import AddAuthor from "./views/add.view";
import EditAndUpdatePage from "./views/edit.view";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authors/new" element={<AddAuthor />} />
        <Route path="authors/:authorId/edit" element={<EditAndUpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
