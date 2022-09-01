import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }
  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input className="note-input__title" type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className="note-input__body" placeholder="body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
