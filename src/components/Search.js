import React from "react";

function Search({handleSubmit, setSearchFilter, searchFilter}) {
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
