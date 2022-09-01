import React from "react";
import ContactItem from "./ContactItem";

export default function ContactList(props) {
  return (
    <div className="note-list">
      {props.notes.map((note) => (
        <ContactItem key={note.id} onDelete={props.onDelete} id={note.id} {...note} />
      ))}
    </div>
  );
}
