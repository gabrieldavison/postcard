import React from "react";
import { useState } from "react";
import Timeline from "./Timeline";
import Search from "./Search";
import Nav from "./Nav";

const UserComponent = (props) => {
  const [uploadsLikes, updateUploadsLikes] = useState("uploads");
  return (
    <div>
      <Nav currentUsername={props.currentUsername} />
      <Search
        handleSearch={props.handleSearch}
        updateSearchedUser={props.updateSearchedUser}
      />
      <h1>User Page</h1>
      <h1>{props.user.username}</h1>
      {/* renders follow button if page is rendering a user who is not logged in */}
      {props.currentUsername !== props.user.username ? (
        <button onClick={() => props.handleFollow(props.user.username)}>
          {props.allUsers
            .find((val) => val.username === props.currentUsername)
            .followed.includes(props.user.username)
            ? "Unfollow"
            : "Follow"}
        </button>
      ) : null}
      <div>
        <label>
          <input
            id="uploads"
            type="radio"
            name="uploadsLikes"
            value="uploads"
            checked={uploadsLikes === "uploads"}
            onChange={(e) => updateUploadsLikes(e.target.value)}
          />
          Uploads
        </label>
        <label>
          <input
            id="Likes"
            type="radio"
            name="uploadsLikes"
            value="likes"
            checked={uploadsLikes === "likes"}
            onChange={(e) => updateUploadsLikes(e.target.value)}
          />
          Likes
        </label>
      </div>
      {uploadsLikes === "uploads" ? (
        //Timeline for uploads view
        <Timeline
          renderPostcards={props.user.postcards}
          handleLike={props.handleLike}
          liked={props.liked}
        />
      ) : (
        //Timeline for likes view
        <Timeline
          renderPostcards={props.allPostcards.filter((val) =>
            props.user.liked.includes(val.id)
          )}
          handleLike={props.handleLike}
          liked={props.liked}
        />
      )}
    </div>
  );
};

export default UserComponent;
