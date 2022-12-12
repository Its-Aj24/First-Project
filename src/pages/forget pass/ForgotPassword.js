import React, { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import stylesheet from "./forgot.module.css";
import Ajay from "../ajay/Ajay";

export const MyContext = createContext();

const ForgotPassword = () => {
  const [user, setUser] = useState({
    name: "Ajay",
    city: "Ahmedabad",
    mobile: "9865785225",
  });

  const [email, setemail] = useState("");

  const my_onChangeFun = (e) => {
    setemail(e.target.value);
  };

  const submitFun = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const mnj = () => {
    setUser({
      name: "Karan",
      city: "Ahmedabad",
      mobile: "888888",
    });
  };
  return (
    <MyContext.Provider value={user}>
      <div className={stylesheet.karan}>
        <div className={stylesheet.header}>
          <h2 style={{ color: "#fff" }}>Reset Password</h2>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <form onSubmit={submitFun}>
            <div className={stylesheet.ajay}>
              <label style={{ padding: "5px" }} htmlFor="email">
                <strong style={{ fontSize: "18px" }}>Registered Email</strong>
              </label>
            </div>
            <div className={stylesheet.ajay}>
              <input
                placeholder="Enter Your Email"
                type="email"
                name="email"
                value={email}
                onChange={my_onChangeFun}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="success" type="submit">
                Send Mail
              </Button>
              <Button variant="outline-info" onClick={mnj}>
                Change
              </Button>
              <br />
              <Ajay />
            </div>
          </form>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ForgotPassword;
