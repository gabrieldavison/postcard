import React, { useState } from "react";
import "./styles/PostcardComponent.css";
const Postcard = (props) => {
  const [textClass, updateTextClass] = useState("hidden");
  const [imgClass, updateImgClass] = useState("opaque");
  return (
    <div className="postcard-component">
      <div className="image-text-container">
        <img
          className={`${imgClass} postcard-image`}
          src={`./userImg/${props.postcard.location}.jpg`}
          width="700px"
          onClick={() => {
            //toggle hidden text
            imgClass === "opaque"
              ? updateImgClass("transparent")
              : updateImgClass("opaque");
            textClass === "hidden"
              ? updateTextClass("visible")
              : updateTextClass("hidden");
          }}
        ></img>
        <p className={`${textClass} postcard-text`}>{props.postcard.text}</p>
      </div>
      <div className="postcard-details">
        <div className="author-date">
          <h3>{props.postcard.date.toLocaleString()}</h3>
          <h2>{props.postcard.owner}</h2>
        </div>

        <div className="postcard-buttons">
          <button onClick={() => props.handleLike(props.postcard.id)}>
            {props.liked.includes(props.postcard.id) ? "Unlike" : "Like"}
          </button>
          {props.loggedIn === true ? (
            <button
              onClick={() => props.handleDeletePostcard(props.postcard.id)}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Postcard;
