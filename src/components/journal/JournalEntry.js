import React from "react";

export const JournalEntry = (props) => {
  return (
    <div className="journal__entry pointer">
      {props.url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${props.url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{props.title}</p>
        <p className="journal__entry-content">{props.body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
