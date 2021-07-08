import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";

import DateAndTimePicker from "./material-ui-comps/DateAndTimePicker";
import TextInput from "./material-ui-comps/TextInput";
import ReminderCheckbox from "./material-ui-comps/ReminderCheckbox";


export default class ModalForm extends React.Component {
  state = {
    [text, setText]: null,
    [day, setDay]: null,
    [reminder, setReminder]: false,
    [show, setShow]: false,
  }

  handleClose = () => setShow(false);
  handleShow = () => setShow(true);

  handleChange = (e) => {
    e.preventDefault();
    if (!text) {
      alert(`Please complete the entire form.`);
      return;
    }
    this.setState({ title: e.target.value });
    this.setState({ datetime: e.target.value });
    this.setState({ reminder: e.target.value });

    onAdd({ title, datetime, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }

  render() {
    return (
      <Modal show={true} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
      </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
        </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalForm;






<Modal show={true} onHide={handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>New Task</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Woohoo, you're reading this text in a modal!
      </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleSubmit}>
      Submit
        </Button>
  </Modal.Footer>
</Modal>
