import React, { useContext } from "react";
import { MyContext } from "../forget pass/ForgotPassword";
import Ajay1 from "./Ajay1";

const Ajay = () => {
  const user = useContext(MyContext);
  return (
    <>
      <div>
        <h1>Name:{user.name}</h1>
        <h2>Surname:{user.city}</h2>
        <h3>Occupation:{user.mobile}</h3>
      </div>
      <div>
        <Ajay1 />
      </div>
    </>
  );
};

export default Ajay;
