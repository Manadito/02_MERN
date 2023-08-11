import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2 && e.target.value.length > 0) {
      setFirstNameError("First name must be at least 2 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 && e.target.value.length > 0) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input type="text" name="firstName" onChange={handleFirstName} />
        {firstNameError ? <p>{firstNameError}</p> : ""}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" onChange={handlePassword} />
        {passwordError ? <p>{passwordError}</p> : ""}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password: </label>
        <input type="password" onChange={handleConfirmPassword} />
        {password !== confirmPassword ? (
          <p>Password and Confirm Password must be the same</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
