import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { toast } from "react-toastify";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const addUser = async (e) => {
    const data = { name, email, phone };
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        data
      );
      if (response.status === 201 || response.status === 200) {
        toast.success("Successfully added");
        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to add user");
    }
  };
  return (
    <div>
      <form
        className="container form-item shadow w-50 py-3 px-3"
        onSubmit={addUser}
      >
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
        <lable className="labels d-flex text-secondary">Phone No.</lable>
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
  );
};

export default Form;
