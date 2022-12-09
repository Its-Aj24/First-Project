import React, { useState } from "react";
import { Button } from "react-bootstrap";
import stylesheet from "./forgot.module.css";


const ForgotPassword = () => {
  const [email, setemail] = useState("");

const my_onChangeFun =(e)=>{
    setemail(e.target.value)
};

const submitFun = (e)=>{
    e.preventDefault();
    console.log(email);
};

  return (
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
              
              <strong style={{ fontSize: "18px" }}>
                
                Registered Email
              </strong>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
