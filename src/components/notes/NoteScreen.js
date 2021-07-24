import React from "react";
import { NotesAppBar } from "./NotesAppBar";
export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          className="notes__textarea"
          placeholder="what happent today"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="someting awesome"
          />
        </div>
      </div>
    </div>
  );
};
