import React from "react";
import moment from "moment";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";
import ContactList from "./ContactList";

const dateTime = new Date();

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((c) => c.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((pre) => {
      return {
        notes: [
          ...pre.notes,
          {
            id: Math.floor(Math.random() * 1000 + 1),
            title,
            body,
            archived: false,
            createdAt: moment(dateTime).format("YYYY-MM-D"),
          },
        ],
      };
    });
  }
  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Aplikasi Notes</h1>
        </div>
        <div className="note-app__body">
          <h2>Tambah Notes</h2>
          <ContactInput addNotes={this.onAddNotesHandler} />
          <ContactList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}

export default ContactApp;
