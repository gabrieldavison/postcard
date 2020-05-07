import React, { useState } from "react";
import "./PostcardComponent.css";
const Postcard = (props) => {
  const [textClass, updateTextClass] = useState("hidden");

  return (
    <div>
      <img
        src={`./userImg/${props.postcard.location}.jpg`}
        width="700px"
        onClick={() => {
          //toggle hidden text
          textClass === "hidden"
            ? updateTextClass("visible")
            : updateTextClass("hidden");
        }}
      ></img>
      <p className={textClass}>{props.postcard.text}</p>
      <h3>{props.postcard.date.toLocaleString()}</h3>
      <h2>{props.postcard.owner}</h2>
      <button onClick={() => props.handleLike(props.postcard.id)}>
        {props.liked.includes(props.postcard.id) ? "Unlike" : "Like"}
      </button>
      {props.loggedIn === true ? (
        <button onClick={() => props.handleDeletePostcard(props.postcard.id)}>
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default Postcard;
