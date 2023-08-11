import React from "react";
import { Link } from "react-router-dom";
import AuthorsTable from "../components/authorsTable.component";

const Main = () => {
  return (
    <div>
      <div>
        <h1 className="text-primary">Favorite Authors</h1>
        <p>
          <Link to="/authors/new">Add an author</Link>
        </p>
      </div>
      <div>
        <AuthorsTable />
      </div>
    </div>
  );
};

export default Main;
