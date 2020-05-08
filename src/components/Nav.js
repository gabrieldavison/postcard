import React from "react";
import { Link } from "@reach/router";
import Upload from "./Upload";
import "./styles/Nav.css";
const Nav = (props) => {
  return (
    <div className="nav-component">
      <div className="feed">
        <Link to="/">Feed</Link>
      </div>
      <div className="upload">
        <Link to="/upload">Upload</Link>
      </div>
      <div className="user">
        <Link to="/user">{props.currentUsername}</Link>
        <button onClick={() => props.logout()}>Logout</button>
      </div>
    </div>
  );
};

export default Nav;
