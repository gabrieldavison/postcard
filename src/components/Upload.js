import React, { useState } from "react";
import Nav from "./Nav";
import { navigate } from "@reach/router";
const Upload = (props) => {
  const [file, updateFile] = useState(null);
  const [text, updateText] = useState("");
  function handleUpload(e) {
    e.preventDefault;
    props.handleAddPostcard(text);
    updateFile(null);
    updateText("");
    navigate("/");
  }

  function checkLastUpload() {
    if (props.user.postcards.length === 0) {
      return true;
    }
    const lastPost = props.user.postcards[props.user.postcards.length - 1];
    const currentTime = new Date();
    const timeUntilUpload = lastPost.date.setHours(
      lastPost.date.getHours() + 24
    );
    if (timeUntilUpload < currentTime) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div>
      <Nav currentUsername={props.currentUsername} />
      <h1>Upload a Postcard</h1>
      {checkLastUpload() ? (
        <div>
          <img src={file} width="700px"></img>
          <br></br>

          <form>
            <input
              type="file"
              onChange={() =>
                updateFile(URL.createObjectURL(event.target.files[0]))
              }
            ></input>

            <h3>Text:</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => updateText(e.target.value)}
            ></input>
            <button onClick={(e) => handleUpload(e)}>Upload</button>
          </form>
        </div>
      ) : (
        <h3>You have already uploaded a postcard today</h3>
      )}
    </div>
  );
};
export default Upload;
