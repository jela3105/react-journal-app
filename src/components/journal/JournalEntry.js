import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://en.es-static.us/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Keep ur bliss there is nothing wrong with this
        </p>
        <p className="journal__entry-content">
          Get out of our way We're moving sideways Welcome to Mulberry Street{" "}
        </p>
      </div>
    </div>
  );
};
