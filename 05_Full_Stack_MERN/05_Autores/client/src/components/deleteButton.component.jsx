import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const DeleteButton = (props) => {
  const { author, removeAuthorFromList, authorId } = props;

  const handleOnClickDeleteButton = (e) => {
    if (author) {
      deleteAuthorById(author._id); // author._id replaces authorId
      removeAuthorFromList(author._id);
    }
  };

  const deleteAuthorById = async (authorId) => {
    // This will take author._id as the argument
    try {
      let res = await axios.delete(
        "http://localhost:8000/api/authors/" + authorId
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={handleOnClickDeleteButton}>Delete</button>
    </div>
  );
};

export default DeleteButton;
