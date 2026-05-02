import React from "react";

const MessageForm = () => {
  return (
    <>
      <div className="mform">
        <h1>Send Us Message</h1>
        <input type="text" placeholder="Enter your name" required={true} />
        <input type="email" placeholder="Enter your email" required={true} />
        <textarea name="message" placeholder="Enter your message" rows={5}></textarea>
        <button className="btn">Send Message</button>
      </div>
    </>
  );
};

export default MessageForm;
