import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import image_logo from "../../assets/karn.JPEG";
import image_logo1 from "../../assets/ajay.JPEG";
import stylesheet from "../contact/contact.module.css";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <div className={stylesheet.main} >
      <div className={stylesheet.my_karn}>
        <div className={stylesheet.img_karn}>
          <img src={image_logo} alt="" />
        </div>
        <div>
          <h4>Karan Patel</h4>
          <h6>Jr. ReactJs Developer</h6>
          <p> <FaWhatsapp className="text-success" /> <strong>9265174306</strong></p>
        </div>
      </div>

      <div className={stylesheet.my_karn}>
        <div className={stylesheet.img_karn}>
          <img src={image_logo1} alt="" />
        </div>
        <div>
          <h4>Ajay Metaliya</h4>
          <h6>Jr. ReactJs Developer</h6>
          <p> <FaWhatsapp className="text-success" /> <strong>9067022737</strong></p>

        </div>
      </div>
    </div>
  );
};

export default Contact;
