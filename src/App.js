import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  function sendSms() {
    console.log("CLICKKKKK");
    const data = {
      email: "alonbraymok007@gmail.com",
      password: "123456",
      phone: "+972528896390",
    };

    axios
      .post(`http://localhost:3500/users`, { ...data })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((e) => console.log({ e }));
  }

  return (
    <div className="App" onClick={() => sendSms()}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 72,
            borderWidth: 5,
            borderColor: "#FFF",
            background: "rgb(79,106,242)",
            background:
              "radial-gradient(circle, rgba(79,106,242,1) 0%, rgba(252,70,107,1) 100%)",
          }}
        ></div>
        <p style={{ fontSize: 25 }}>לחץ כדי לקבל קישור לנייד</p>
      </header>
    </div>
  );
}

export default App;
