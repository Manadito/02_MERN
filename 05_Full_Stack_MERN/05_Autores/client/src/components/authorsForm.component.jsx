import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const AuthorsForm = (props) => {
  // Destructuring props
  const { formType } = props;
  // State Hooks
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();
  const { authorId } = useParams();

  useEffect(() => {
    // Fetch author data if authorId is available (for update form)
    if (formType === "update" && authorId) {
      fetchAuthorData();
    }
  }, [formType, authorId]);

  const fetchAuthorData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/authors/${authorId}`
      );
      const fetchedAuthor = response.data; // Assuming the API returns the author's data

      // Populate the form with the fetched author data
      setAuthor({
        firstName: fetchedAuthor.firstName, // This connects to value atribute of the form element. The value will no longer be empty
        lastName: fetchedAuthor.lastName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeAuthorDetailsHandler = (e) => {
    let authorToUpdate = { ...author };
    authorToUpdate[e.target.name] = e.target.value;
    setAuthor(authorToUpdate);

    // Above same as:
    // setPet({ ...pet, [e.target.name]: e.target.value });
  }; // setState is asynchronous, so we can't console.log(pet) right after setPet(petToUpdate)

  const onSubmitAuthorDetailsHandler = (e) => {
    e.preventDefault();
    //console.log(formType);
    if (formType === "update") {
      // Update Form
      editAuthor();
    } else {
      // Create Form
      addAuthor();
    }
  };

  // API call and aux functions

  const addAuthor = async () => {
    try {
      let res = await axios.post("http://localhost:8000/api/authors", author);
      navigate("/");
    } catch (err) {
      console.log(err);
      updateErrorMessages(err);
    }
  };

  const editAuthor = async () => {
    try {
      let res = await axios.put(
        `http://localhost:8000/api/authors/${authorId}`,
        author
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      // extract error messages from err.response.data
      updateErrorMessages(err);
    }
  };

  // Error Messages Aux Function

  const updateErrorMessages = (err) => {
    let errors = err.response.data.errors?.errors;
    let errorMesagesToUpdate = _.mapValues(errors, (error) => {
      return error.message;
    });
    setErrorMessages(errorMesagesToUpdate);
  };

  return (
    <div>
      <form onSubmit={onSubmitAuthorDetailsHandler}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={author.firstName}
            onChange={onChangeAuthorDetailsHandler}
          />
          {_.has(errorMessages, "firstName") && (
            <div className="text-danger small">{errorMessages.firstName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={author.lastName}
            onChange={onChangeAuthorDetailsHandler}
          />
          {_.has(errorMessages, "lastName") && (
            <div className="text-danger small">{errorMessages.lastName}</div>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-success me-2" type="submit">
            Submit
          </button>
          <Link className="btn btn-warning" to={"/"}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthorsForm;
