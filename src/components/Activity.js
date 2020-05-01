import React from "react";
import PostcardComponent from "./PostcardComponent";
const Activity = (props) => {
  return (
    <div>
      {props.renderPostcards.map((val) => (
        <PostcardComponent
          key={val.id}
          postcard={val}
          handleLike={props.handleLike}
        />
      ))}
    </div>
  );
};

export default Activity;
