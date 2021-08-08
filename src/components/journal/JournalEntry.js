import React from "react";
import moment from "moment";

export const JournalEntry = (props) => {
  const noteDate = moment(props.date);

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
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
