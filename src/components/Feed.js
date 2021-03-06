import React, { useState } from "react";
import Timeline from "./Timeline";
import Search from "./Search";
import Nav from "./Nav";
import { Link } from "@reach/router";
import "./styles/Feed.css";
const Feed = (props) => {
  const [activityDiscover, updateActivityDiscover] = useState("activity");

  const discoverPostcards = () => {
    let renderIDs = props.allUsers
      .filter((val) => props.user.followed.includes(val.username))
      .map((val) => val.liked)
      .reduce((prev, curr) => prev.concat(curr));

    return props.allPostcards.filter((val) => renderIDs.includes(val.id));
  };
  return (
    <div className="feed-component">
      <Nav currentUsername={props.currentUsername} logout={props.logout} />
      <Search
        handleSearch={props.handleSearch}
        updateSearchedUser={props.updateSearchedUser}
      />
      <div className="feed-container">
        <div className="feed-header">
          <h1>Feed</h1>
          {/* Radio buttons to switch between discover and activity */}
          <div className="timeline-selector">
            <input
              id="activity"
              type="radio"
              name="activityDiscover"
              value="activity"
              checked={activityDiscover === "activity"}
              onChange={(e) => updateActivityDiscover(e.target.value)}
            />
            <label htmlFor="activity">Activity</label>
            <input
              id="discover"
              type="radio"
              name="activityDiscover"
              value="discover"
              checked={activityDiscover === "discover"}
              onChange={(e) => updateActivityDiscover(e.target.value)}
            />
            <label htmlFor="discover">Discover</label>
          </div>
        </div>
        {activityDiscover === "activity" ? (
          //Timeline for activity view
          props.followed.length === 0 ? (
            <h2>You havent followed anyone yet...</h2>
          ) : (
            <Timeline
              renderPostcards={props.allPostcards.filter((val) => {
                return props.user.followed.includes(val.owner);
              })}
              handleLike={props.handleLike}
              liked={props.liked}
            />
          )
        ) : //Timeline for discover view
        props.followed.length === 0 ? (
          <h2>You havent followed anyone yet...</h2>
        ) : (
          <Timeline
            renderPostcards={discoverPostcards()}
            handleLike={props.handleLike}
            liked={props.liked}
          />
        )}
      </div>
    </div>
  );
};

export default Feed;
