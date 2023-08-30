import React, { useState } from 'react';

/** Searchs for either companies or jobs
 *
 * Prop: none atm
 *
 * State: none atm
 *
 * {CompanyList, JobList} -> SearchForm
 *
 */

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("this is the searchterm", searchTerm);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    console.log("this is the searchterm", newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchFor(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="SearchForm">
      <form className="SearchForm-form" onSubmit={onSubmit}>
        <div>
          <input
            name="searchTerm"
            placeholder="Enter search term..."
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;