import React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://622e0ec58d943bae348d75e4.mockapi.io/api/fetchData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://622e0ec58d943bae348d75e4.mockapi.io/api/fetchData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://622e0ec58d943bae348d75e4.mockapi.io/api/fetchData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div>
      <Table className="table_read" singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="table_td_read">
              First Name
            </Table.HeaderCell>
            <Table.HeaderCell className="table_td_read">
              Last Name
            </Table.HeaderCell>
            <Table.HeaderCell className="table_td_read">
              Checked
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="2" className="table_td_read">
              Action
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell className="table_td_read">
                  {data.firstName}
                </Table.Cell>
                <Table.Cell className="table_td_read">
                  {data.lastName}
                </Table.Cell>
                <Table.Cell className="table_td_read">
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button
                      className="table_td_read"
                      onClick={() => setData(data)}
                    >
                      Update
                    </Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button
                    className="table_td_read"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
