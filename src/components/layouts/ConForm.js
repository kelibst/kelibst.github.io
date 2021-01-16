import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";


const ConForm = () => {
  const initialState = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [isSubmit, setisSubmit] = useState(false) 
  const [sent, setSend] = useState(
    {
      status: false,
      errors: false,
    }
  )
const { status , errors } = sent
  const { fullname, email, phone, message } = userData;
  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmit(true)

    const templateParams = {
      from_name: fullname.trim(),
      from_email: email.trim(),
      subject: "",
      phone: phone.trim(),
      to_name: "Kekeli Dogbevi Jiresse",
      message: message.trim(),
    };
    emailjs
      .send(
        "service_ao4tyqi",
        "template_a1tgwwi",
        templateParams,
        "user_t3BxG9skb7zXIqBIK1Cdu"
      )
      .then(() => {
        setisSubmit(false)
        resetForm();
        setSend({
          status: true
        })
        
      }).catch(err => {
        setSend({
          errors: true
        })
       
        setisSubmit(false)
      });
  };

    useEffect(() => {
     status && setTimeout(() => {
        setSend({
          status: false
        })
      }, 5000)

      errors &&  setTimeout(() => {
        setSend({
          errors: false
        })
      }, 5000)
    },[status, errors])
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setUserData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
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
            onChange={handleChange}
            placeholder="Full name"
            value={fullname}
          />
          <input
            type="email"
            onChange={handleChange}
            value={email}
            required
            name="email"
            placeholder="Email"
          />
          <input
            type="tel"
            pattern="^(\+)?([ 0-9]){9,16}$"
            required
            className="phone-num"
            name="phone"
            onChange={handleChange}
            placeholder="Phone number"
            value={phone}
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
            onChange={handleChange}
            value={message}
          ></textarea>
          {isSubmit ? <button type="submit" disabled className="con-sub btn">
          Send Message
        </button> : 
       <button type="submit" className="con-sub btn">
            Send Message
          </button>
      }
      { status &&  <h6 className={`status d-block text-succ text-center`}>Sent</h6>}
       { errors &&   <h6 className={`status text-danger text-center`}>There was an Error in Sending your message. Try again later.</h6>}
        </div>
      </form>
    </div>
  );
};

export default ConForm;
