import React from "react";
import PostcardComponent from "./PostcardComponent";
const Timeline = (props) => {
  return (
    <div>
      {props.renderPostcards.length === 0 ? <h2>User has no uploads</h2> : null}
      {props.renderPostcards.map((val) => (
        <PostcardComponent
          key={val.id}
          postcard={val}
          handleLike={props.handleLike}
          liked={props.liked}
          loggedIn={props.loggedIn}
          handleDeletePostcard={props.handleDeletePostcard}
        />
      ))}
    </div>
  );
};

export default Timeline;
