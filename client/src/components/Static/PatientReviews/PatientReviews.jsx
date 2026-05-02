import React from "react";
import "./PatientReviews.css";
import ReviewsData from "./PatientReviews.js";
const PatientReviews = () => {
  return (
    <>
      <div className="review-container">
        <div className="heading-container">
          <p>Tesimonial</p>
          <h1>What Our Patients</h1>
          <h1>Says About Us</h1>
        </div>
        <div className="row why-container">
          {ReviewsData.map((d, i) => (
            <div className="col-md-3" key={i}>
              <img src={d.pic} alt="uerpic" width={"100px"} />
              <p>
                {d.name} <br /> {d.address}
              </p>
              <div className="d-flex flex-row">
                <h6 className="icon">
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star-half-alt active-star"></span>
                </h6>
              </div>
              <h2>{d.CommentTitle}</h2>
              <p>{d.commentDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientReviews;
