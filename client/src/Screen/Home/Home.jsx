import React, { useState } from "react";
import QRCode from "react-qr-code";
import socketIOClient from "socket.io-client";
import Sucess from "../Success/Sucess";
import "./Home.css";
const Home = () => {
  const socket = socketIOClient.connect("http://10.1.74.97:8000");
  const [response, setResponse] = useState("");
  const random = Math.round(Math.random() * 1000);
  console.log(random);
  socket.on("message" + random, (id) => {
    console.log(id);
    setResponse(id);
  });
  if (response) {
    return <Sucess />;
  }
  return (
    <div>
      <h3 className="heading">Scan && Submit your response</h3>
      <div className="qrcontainer">
        <QRCode
          className="qrcode"
          value={window.location.href + "abc/" + random}
        />
      </div>
    </div>
  );
};

export default Home;
