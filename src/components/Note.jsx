import React from "react";
import notes from "../notes"

const Note = (props) => (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
);

const Notes = () => (
    notes.map( note => (
        <Note
            key={note.key}
            title={note.title}
            content={note.content}
        />
    ))
)

export default Notes;