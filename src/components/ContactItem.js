import React from "react";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

export default function ContactItem({ title, body, id, onDelete, createdAt }) {
  return (
    <div className="note-item">
      <ContactItemBody title={title} body={body} tanggal={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
