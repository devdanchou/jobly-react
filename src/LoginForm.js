import React, { useState } from "react";

/** Form for logging in current user.
 *
 * prop: login function
 * state: formData
 *
 * App -> RouteList -> LoginForm
 */

function LoginForm({ login }) {
  const initialState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {username, password} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
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
      <h1>Log In</h1>
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

        <button>Submit</button>
      </form>
    </div>

  );
}

export default LoginForm;