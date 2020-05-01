import React from "react";

const Postcard = (props) => {
  return (
    <div>
      <img src={`./userImg/${props.postcard.location}.jpg`} width="700px"></img>
      <h3>{props.postcard.date.toLocaleString()}</h3>
      <h2>{props.postcard.owner}</h2>
      <button onClick={() => props.handleLike(props.postcard.id)}>Like</button>
      <h3></h3>
    </div>
  );
};

export default Postcard;
