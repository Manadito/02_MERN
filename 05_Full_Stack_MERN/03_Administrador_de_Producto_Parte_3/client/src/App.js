import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./views/homePageView/HomePage.view";
import DetailsPage from "./views/detailsPageView/DetailsPage.view";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Creating a Route for the Homepage View*/}
        <Route path="/products/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
