import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post(`https://622e0ec58d943bae348d75e4.mockapi.io/api/fetchData`, {
      firstName,
      lastName,
      checkbox,
    });
  };

  return (
    <div>
      <Form className="form">
        <Form.Field>
          <label>First Name</label>
          <br></br>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <br></br>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Link to="/read">
          <Button onClick={postData} type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
