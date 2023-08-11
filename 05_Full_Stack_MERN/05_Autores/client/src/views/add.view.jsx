import React from "react";
import { Link } from "react-router-dom";
import AuthorsForm from "../components/authorsForm.component";

const AddAuthor = () => {
  return (
    <div>
      <h1 className="text-primary">Favorite Authors</h1>
      <div>
        <Link to={"/"}>Back to Home</Link>
      </div>
      <h4>Add a new author:</h4>

      <AuthorsForm formType={"create"} />
      <hr />
    </div>
  );
};

export default AddAuthor;
