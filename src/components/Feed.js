import React from "react";
import Activity from "./Activity";

const Feed = (props) => {
  console.log(props.allPostcards);
  console.log(props.user);
  return (
    <div>
      <h1>{props.user.username}</h1>
      <Activity
        renderPostcards={props.allPostcards.filter((val) => {
          return props.user.followed.includes(val.owner);
        })}
      />
    </div>
  );
};

export default Feed;
