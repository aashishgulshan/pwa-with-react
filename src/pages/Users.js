import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
const url = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 className="text-center">User Page</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr className="tablePointer" key={id} onClick={() => handleRowClick(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={fetchData}>Load Data</button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Hello, {selectedUser && <>{selectedUser.name.split(" ")[0]}</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <p>ID: {selectedUser.id}</p>
              <p>Name: {selectedUser.name}</p>
              <p>Username: {selectedUser.username}</p>
              <p>Email: {selectedUser.email}</p>
              <p>
                Address:{" "}
                {selectedUser.address.street +
                  ", " +
                  selectedUser.address.city +
                  ", " +
                  selectedUser.address.zipcode}
              </p>
              <p>Phone Number: {selectedUser.phone}</p>
              <p>
                Website:{" "}
                <a href={selectedUser.website} target="_blank">
                  {selectedUser.website}
                </a>
              </p>
              <p>Company: {selectedUser.company.name}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Users;
