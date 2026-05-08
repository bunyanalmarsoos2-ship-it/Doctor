import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DoctorsData } from "./DoctorsData";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
const Appointments = () => {
  const { id } = useParams();
  const [docinfo, setDocinfo] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  //find doctor
  const getDocInfo = async () => {
    let docinfo = await DoctorsData.find((doc) => doc.id == id);
    setDocinfo(docinfo);
  
  };

  useEffect(() => {
    getDocInfo();
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      <div className="container docinfo-container">
        <div className="row m-3">
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center ">
            <img src={docinfo?.pic} alt="docImage" height={200} width={200} />
            <h6>{docinfo?.name}</h6>
            <h6
              className={`${docinfo?.available ? "text-success" : "text-danger"}`}
            >
              {docinfo?.available ? "Available" : "Not Available"}
            </h6>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center m-3">
            <h6>Experience: {docinfo?.experience} years</h6>
            <h6>About Doctor:</h6>
            <p>{docinfo?.about}</p>
            <h5>Consultaion Fee: {docinfo?.fee}</h5>
            <div className="date-time mt-3">
              <h6>Select Your Booking Date & Time: 👇  </h6>
              <DatePicker
                className="calender"
                minDate={new Date()}
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                dateFormat={"d-MMM-yyyy  h:mm aa"}
                timeCaption="Time"
                minTime={new Date()}
                maxTime={setHours(setMinutes(new Date(), 2), 22)}
              />
              <p>
                Your Selected Booking :
                {selectedDateTime
                  ? selectedDateTime.toLocaleString()
                  : "Please select a data & time"}{" "}
              </p>
            </div>
            <button
              className="btn btn-primary w-50"
              disabled={!docinfo?.available}
            >
              {docinfo?.available ? "Book Now" : "Doctor Not Available"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
3.28