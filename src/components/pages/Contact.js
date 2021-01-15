import React from "react";
import Icofont from "react-icofont";
import "./Contact.scss";
const Contact = () => {
  const contacts = [
    {
      name: "Call Me",
      status: "+299-54-62-498-62",
      icon: "phone",
    },
    {
      name: "E-mail",
      status: "kbooster17@gmail.com",
      icon: "letter",
    },
  ];
  const socials = [
    {
      name: "Linked-In",
      status: "https://www.linkedin.com/in/kekeli-dogbevi-jiresse/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      status: "https://twitter.com/keli_booster",
      icon: "twitter",
    },
    {
      name: "GitHub",
      status: "https://github.com/kelibst",
      icon: "github",
    },
  ];
  return (
    <div className="con">
      <div className="con-pre-cont">
        <div className="con-cont">
          <h1 className="text-center con-header">Contact Me</h1>
          <h6 className="desc text-center">
            Let's get in touch! Send me an email. If this is urgent, consider
            sending me a text message instead.
          </h6>
          <div className="con-cards">
            {contacts.map((contact) => (
              <div className="con-card">
                <div className="con-card-icon">
                  <Icofont icon={contact.icon} />
                </div>
                <div className="con-card-de">
                  <h4 className="con-card-name">{contact.name}</h4>
                  <p className="con-card-dt">{contact.status} </p>
                </div>
              </div>
            ))}
            <div className="con-card con-social">
              {socials.map((social) => (
                <a href={social.status} className="soc">
                  <Icofont icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="con-form">
            <form action="/">
              <div className="info">
                <input
                  className="fname"
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                />
                <input type="text" name="email" placeholder="Email" />
                <input
                  type="text"
                  className="phone-num"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
              <p>Message</p>
              <div className="con-area-cont">
                <textarea
                  name="message"
                  rows="10"
                  className="con-area"
                ></textarea>
                <button type="submit" className="con-sub btn" href="/">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
