import React from "react";
import "./ShortIntro.css";
import hosImage from "../../../assets/images/hos-image.jpg";
const ShortIntro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="row">
          <div className="col-md-5 img-container">
            <img src={hosImage} alt="hosimage" className="hos-image" />
          </div>
          <div className="col-md-6 info-container">
            <h1>Zain Heath Care</h1>
            <h6>A Super Speciality Hospital</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              aperiam quibusdam doloribus placeat aut, quia ipsam. Culpa,
              provident nostrum. Non doloribus,{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              quaerat vero qui possimus ipsam deleniti, rerum, atque
              perspiciatis, minima quia a tempora. Explicabo, nobis fuga.
            </p>
            <button className="btn btn-primary">Book An Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortIntro;
