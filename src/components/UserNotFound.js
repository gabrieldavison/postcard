import React from "react";
import Search from "./Search";
import Nav from "./Nav";

const UserNotFound = (props) => {
  return (
    <div>
      <Nav currentUsername={props.currentUsername} logout={props.logout} />
      <Search
        handleSearch={props.handleSearch}
        updateSearchedUser={props.updateSearchedUser}
      />
      <h1>User Not Found</h1>
    </div>
  );
};

export default UserNotFound;
