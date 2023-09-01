import React, { useState, useContext } from "react";
import userContext from "./userContext";

/** Form for signing up in new user.
 *
 * prop: signup function
 * state: formData
 *
 * App -> RouteList -> SignUpForm
 */

function SignUpForm() {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const { signup } = useContext(userContext);

  const [formData, setFormData] = useState(initialState);

  /** Send {username, password, firstName, lastName, email} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;