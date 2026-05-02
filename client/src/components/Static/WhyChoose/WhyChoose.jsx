import React from "react";
import "./WhyChoose.css";
import Image1 from '../../../assets/images/hospital/personalize.png'
import Image2 from '../../../assets/images/hospital/trusted.png'
import Image3 from '../../../assets/images/hospital/empower.png'
const WhyChoose = () => {
  return (
    <>
      <h1 className="text-center mt-5">Why Choose Us?</h1>
      <div className="row why-container">
        <div className="col-md-3">
            <img src={Image1} alt="Image1" width={'150px'} />
            <h2>Personalize Excellence</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed aliquam dicta tempore aperiam possimus.</p>
        </div>
        <div className="col-md-3">
            <img src={Image2} alt="Image1" width={'150px'} />
            <h2>Trusted Care</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed aliquam dicta tempore aperiam possimus.</p>
        </div>
        <div className="col-md-3">
            <img src={Image3} alt="Image1" width={'150px'} />
            <h2>Empowering Wellness Journey</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sed aliquam dicta tempore aperiam possimus.</p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
