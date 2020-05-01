import React from "react";
import PostcardComponent from "./PostcardComponent";
const Activity = (props) => {
  console.log(props.renderPostcards);

  return (
    <div>
      {props.renderPostcards.map((val) => (
        <PostcardComponent key={val.id} postcard={val} />
      ))}
    </div>
  );
};

export default Activity;
