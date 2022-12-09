import React, { useState } from "react";
import stylesheet from "./signup.module.css";

const Signup = () => {
  const [view, setview] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const my_onChangeFun = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const submitFun = (e) => {
    e.preventDefault();
    console.log(view);
  };

  const my_signup = (e) => {
    e.alert();
  };

  return (
    <div className={stylesheet.my_main}>
      <form onSubmit={submitFun}>
        <div className={stylesheet.my_user}>
          <br />
          <div>
            <label for="fname">First Name</label>
            <br />
            <input
              type="text"
              name="fname"
              value={view.fname}
              onChange={my_onChangeFun}
              required
            />
          </div>
          <div>
            <label for="lname">Last Name</label>
            <br />
            <input
              type="text"
              name="lname"
              value={view.lname}
              onChange={my_onChangeFun}
              required
            />
          </div>
          <div>
            <label for="password">New Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={view.password}
              onChange={my_onChangeFun}
              required
            />
          </div>

          <div>
            <label for="email">Gmail</label>
            <br />
            <input
              type="text"
              name="email"
              value={view.email}
              onChange={my_onChangeFun}
              required
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </div>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Signup;
