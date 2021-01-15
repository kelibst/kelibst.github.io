import React, { useState } from "react";

const ConForm = () => {
  const initialState = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [userData, setUserData] = useState(initialState);
  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="con-form">
      <form onSubmit={handleSubmit}>
        <div className="info">
          <input
            className="fname"
            required
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input type="email" required name="email" placeholder="Email" />
          <input
            type="phone"
            required
            className="phone-num"
            name="phone"
            placeholder="Phone number"
          />
        </div>
        <p>Message</p>
        <div className="con-area-cont">
          <textarea
            required
            minLength="10"
            name="message"
            rows="10"
            className="con-area"
          ></textarea>
          <button type="submit" className="con-sub btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConForm;
