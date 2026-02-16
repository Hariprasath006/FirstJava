import { useState, useEffect } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import Modal from "../components/Modal";
import "../Table.css";

// const API_URL = "http://localhost:8080/api/users";
const API_URL = "https://firstjava-2de1.onrender.com/api/users";

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const loadUsers = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(user => ({
          // SNo: user.rno,
          id:user.id,
          Name: user.name,
          Email: user.email
        }));
        setUsers(formatted);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openAddModal = () => {
    setShowModal(true);
    setEditId(null);
    setName("");
    setEmail("");
  };

 const handleSave = () => {

  if (!name || !email) {
    alert("Fill all fields");
    return;
  }

  const userData =
    editId === null
      ? { name, email }          // ✅ ADD
      : { rno: editId, name, email };  // ✅ UPDATE

  const method = editId === null ? "POST" : "PUT";
  const url = editId === null
      ? API_URL
      : `${API_URL}/${editId}`;

fetch(url, options)
  .then(async res => {
    if (!res.ok) {
      const msg = await res.text();
      alert(msg);   // 🔥 SHOW ERROR
      return;
    }
    loadUsers();
    setShowModal(false);
  });


  const handleEdit = (user) => {
    setShowModal(true);
    //setEditId(user.SNo);
    setName(user.Name);
    setEmail(user.Email);
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      loadUsers();
    });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2 className="title">CRUD</h2>

      <div className="header">
        <Button
          text="Add User"
          onClick={openAddModal}
          className="add-btn"
        />
      </div>

      <br /><br />

      <Table
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal show={showModal}>

        <h3>{editId === null ? "Add User" : "Edit User"}</h3>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <Button
          text="Save"
          onClick={handleSave}
          className="save-btn"
        />

        <Button
          text="Cancel"
          onClick={() => setShowModal(false)}
          className="cancel-btn"
        />

      </Modal>

    </div>
  );
};

export default UserList;
