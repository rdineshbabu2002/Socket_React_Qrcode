import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Form.css";
const io = require("socket.io-client");

const Form = () => {
  const { id } = useParams();
  const socket = io.connect("http://10.1.74.97:8000");
  const [userdata, setuserdata] = useState({
    name: "",
    class: "",
    department: "",
    mobilenumber: "",
  });
  const changeValue = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };
  useEffect(() => {
    socket.emit("connecteduser", id);
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(userdata);
    console.log("submitted" + id);
    socket.emit("Submitted" + id);
  };

  return (
    <div>
      <h3 className="title">Kindly fill the form !!!</h3>
      <form onSubmit={submit} className="form">
        <div className="formelement">
          <label>Enter Your Name :</label>
          <input
            required
            type="text"
            name="name"
            value={userdata.name}
            onChange={(e) => {
              changeValue(e);
            }}
          />
        </div>
        <div className="formelement">
          <label>Enter Your class :</label>
          <input
            required
            type="text"
            name="class"
            value={userdata.class}
            onChange={(e) => changeValue(e)}
          />
        </div>
        <div className="formelement">
          <label>Enter Your Department :</label>
          <input
            required
            type="text"
            name="department"
            value={userdata.department}
            onChange={(e) => {
              changeValue(e);
            }}
          />
        </div>
        <div className="formelement">
          <label>Enter Your MobileNumber :</label>
          <input
            required
            type="number"
            name="mobilenumber"
            value={userdata.mobilenumber}
            onChange={(e) => changeValue(e)}
          />
        </div>
        <input className="button-24" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
