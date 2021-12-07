import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitUserData = (e) => {
    e.preventDefault();

    let { name, email, message } = userData;

    db.collection("contacts")
      .add({
        name,
        email,
        message,
      })
      .then(() => alert("Data submited"))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <form className="form" onSubmit={submitUserData}>
        <h1>Contact Us 🤳</h1>

        <label>Name</label>
        <input
          required
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={postUserData}
        />

        <label>Email</label>
        <input
          required
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={postUserData}
        />

        <label>Message</label>
        <textarea
          required
          placeholder="Message"
          name="message"
          value={userData.message}
          onChange={postUserData}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
