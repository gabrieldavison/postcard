import React, { useState } from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => props.updateSearchedUser(e.target.value)}
      ></input>
      <button onClick={() => props.handleSearch()}>Search Users</button>
    </div>
  );
};

export default Search;
