import React, { useState } from "react";

/** Form for updating profile information for current user.
 *
 * prop: edit function
 * state: formData
 *
 * App -> RouteList -> ProfileForm
 */

function ProfileForm({ edit }) {
  const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);

  /** Send {firstName, lastName, email} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    edit(formData);
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
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formData.username} disabled
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

        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;