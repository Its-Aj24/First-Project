import React, { useState } from "react";
import stylesheet from "./login.module.css";
import { FaEye, FaEyeSlash, FaUserAlt, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import image_logo from '../../assets/bmw.png';
import { Button } from "react-bootstrap";

const Login = () => {
  const [ptype, setPtype] = useState("password");
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const my_onChangeFun = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const changePasswordType = (e) => {
    if (ptype === "password") {
      setPtype("text");
    } else {
      setPtype("password");
    }
  };

  const submitFun = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className={stylesheet.my_main}>
      <form onSubmit={submitFun}>
        <div className={stylesheet.my_user}>
            <div className={stylesheet.my_logo}>
                
                <img  src={image_logo} alt="" />
            </div>
        <div className={stylesheet.my_logo}>
            <h3 style={{fontWeight:"bold"}}>Login Form</h3>
        </div>
          <br />
          <div>
            <div className={stylesheet.form_label}>
              <label for="email">Gmail</label>
            </div>
            <FaUserAlt className={stylesheet.user_icon} />
            <input
              className={stylesheet.my_input}
              type="text"
              name="email"
              value={user.email}
              onChange={my_onChangeFun}
              required
            />

            <br />
          </div>
          <div>
            <div className={stylesheet.form_label}>
              <label for="password">Password</label>
            </div>
            <FaLock className={stylesheet.user_icon} />
            <input
              className={stylesheet.my_input}
              type={ptype}
              name="password"
              value={user.password}
              onChange={my_onChangeFun}
              required
            />
            <div className={stylesheet.my_icon}>
              {ptype === "password" && (
                <FaEyeSlash onClick={changePasswordType} />
              )}
              {ptype === "text" && <FaEye onClick={changePasswordType} />}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit" >Submit</Button>
          </div>
          <div className={stylesheet.my_forgot}>
            <div>
              <NavLink className={stylesheet.my_font} to="/forget">Forgot Password</NavLink>
            </div>
            <div>
              <NavLink className={stylesheet.my_font} to="/signup ">Create a New Account</NavLink>
            </div>
          </div>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
