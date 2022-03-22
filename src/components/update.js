import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [id, setID] = useState(null);

  const updateAPIData = () => {
    axios.put(
      `https://622e0ec58d943bae348d75e4.mockapi.io/api/fetchData/${id}`,
      {
        firstName,
        lastName,
        checkbox,
      }
    );
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  return (
    <div>
      <Form className="form">
        <Form.Field>
          <label>First Name</label>
          <br></br>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <br></br>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Link to="/read">
          <Button type="submit" onClick={updateAPIData}>
            Update
          </Button>
        </Link>
      </Form>
    </div>
  );
}
