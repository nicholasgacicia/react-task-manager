import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import DateAndTimePicker from "./material-ui-comps/DateAndTimePicker";
import TextInput from "./material-ui-comps/TextInput";


const NewTaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert(`Please complete the entire form.`);
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <Form className="add-form" onSubmit={onSubmit}>
      <TextInput />
      <Form.Row className="align-items-center">
        <DateAndTimePicker />
      </Form.Row>
    </Form>
  );
}

export default NewTaskForm;





// eslint-disable-next-line no-lone-blocks
{/* <form className="add-form" onSubmit={onSubmit}>
  <div className="input-group mb-3">
    <DateAndTimePicker />
  </div>
</form> */}

// eslint-disable-next-line no-lone-blocks
{/* <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Date & Time"
            value={day}
            onChange={(e) =>
              setDay(e.target.value)
            }
          />
        </div>
        <div className="form-control form-control-check">
          <label>Reminder?</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) =>
              setReminder(e.currentTarget.checked)
            }
          />
        </div>
        <input className="btn btn-block" type="submit" value="Add Task" />
      </form> */}
