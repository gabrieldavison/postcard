import React, { useState } from "react";
import "./styles/Search.css";
const Search = (props) => {
  return (
    <div className="search-component">
      <form onSubmit={(e) => props.handleSearch(e)}>
        <input
          placeholder="Search Users"
          type="text"
          onChange={(e) => props.updateSearchedUser(e.target.value)}
        ></input>
      </form>
      {/* <input
        type="text"
        onChange={(e) => props.updateSearchedUser(e.target.value)}
      ></input>
      <button onClick={() => props.handleSearch()}>Search</button> */}
    </div>
  );
};

export default Search;
