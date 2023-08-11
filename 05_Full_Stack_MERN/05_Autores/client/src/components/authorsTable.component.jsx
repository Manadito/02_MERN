import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./deleteButton.component";
import _ from "lodash";

const AuthorsTable = (props) => {
  const [authorsList, setAuthorsList] = useState(); // State Hooks. Setting up a state to reload the authors list.

  //Calling the API to store data values in authorsList
  useEffect(() => {
    getAllAuthors();
  }, []);

  const getAllAuthors = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/authors/");
      setAuthorsList(_.orderBy(res.data, ["firstName"], ["asc"]));
    } catch (err) {
      console.log(err);
    }
  };

  const removeAuthorFromList = (authorId) => {
    setAuthorsList(authorsList.filter((author) => author._id !== authorId)); // Only keep the ones that follow the logic author.id is not equal to authorId. If those two valies are equal, then remove them from the list.
  };

  return (
    <div>
      <table className="table table-striped">
        {/* stripe adds zebra-striping to any row inside tbody*/}
        <thead className="table table-secondary">
          {" "}
          {/* secondary chnages the color to gray*/}
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping data values into table rows using map function*/}
          {authorsList &&
            authorsList.map((item, idx) => (
              <tr key={idx}>
                <th>
                  {item.firstName} {item.lastName}
                </th>
                <td className="text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <Link
                      className="btn btn-outline-success btn-sm me-1"
                      to={`authors/${item._id}/edit`}
                    >
                      Edit
                    </Link>
                    <DeleteButton
                      author={item}
                      removeAuthorFromList={removeAuthorFromList}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsTable;
