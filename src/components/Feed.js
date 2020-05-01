import React from "react";
import Activity from "./Activity";

const Feed = (props) => {
  return (
    <div>
      <h1>{props.user.username}</h1>
      <Activity
        renderPostcards={props.allPostcards.filter((val) => {
          return props.user.followed.includes(val.owner);
        })}
        handleLike={props.handleLike}
      />
    </div>
  );
};

export default Feed;
