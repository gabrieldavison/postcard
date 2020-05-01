import React from "react";

const Postcard = (props) => {
  return (
    <div>
      <img src={`./userImg/${props.postcard.location}.jpg`}></img>
    </div>
  );
};

export default Postcard;
