import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = (props) => {
  const noteDate = moment(props.date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(props.id, props));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
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
