import React from "react";
import { Link } from "@reach/router";
import Upload from "./Upload";
const Nav = (props) => {
  return (
    <div>
      <Link to="/">Feed</Link>
      <Link to="/user">{props.currentUsername}</Link>
      <Link to="/upload">Upload</Link>
    </div>
  );
};

export default Nav;
