import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      //   debugger;
      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async () => {
    try {
      const data = { name, email, phone };

      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        data
      );
      if (response.status === 200) {
        toast.success("User details updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (response.status === 200) {
        toast.success("deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1 className="text-secondary mb-4">Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone} </td>
              <td>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn-edit"
                >
                  <i className="fa fa-edit text-dark"></i>
                </button>
              </td>
              <td>
                <Link onClick={deleteUser}>
                  <i className="fa fa-trash text-dark"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="mt-4 text-secondary">Add New User</h2>
      <Link to={"/Form"}>
        <button className="btn btn-success btn-sm rounded-pill border-success px-4">
          Add user
        </button>
      </Link>
      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="container" onSubmit={updateUser}>
                <lable className="label d-flex text-secondary">Name</lable>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="inputs w-100 rounded"
                  placeholder="Enter your name"
                ></input>
                <lable className="labels d-flex text-secondary">Email</lable>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputs w-100 rounded"
                  placeholder="Enter your email"
                ></input>
                <lable className="labels d-flex text-secondary">
                  Phone No.
                </lable>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="inputs w-100 rounded"
                  placeholder="Enter your phone"
                ></input>
                <button className="btn btn-success px-4 btn-rounded-pill">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
