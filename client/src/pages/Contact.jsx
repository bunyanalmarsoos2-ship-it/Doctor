import React from 'react'
import ContactMessage from './../components/Static/ContactMessage/ContactMessage';

const Contact = () => {
  return (
    <>
    <div className="d-flex justify-content-center mt-5">
        <h6>
          <i className="fa-solid fa-phone ms-3"></i> Emergency Call: 1234567890
        </h6>
        <h6>
          <i className="fa-solid fa-clock ms-3"></i> 10:00 AM To 10:00 PM
        </h6>
        <h6>
          
          <i className="fa-solid fa-envelope ms-3"></i> help@zainmath.com
        </h6>
        
      </div>
      <ContactMessage/>
    </>
  )
}

export default Contact