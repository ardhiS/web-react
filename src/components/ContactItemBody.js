import React from "react";

export default function ContactItemBody({ title, body, tanggal }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p>{tanggal}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}
