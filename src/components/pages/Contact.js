import React from "react";
import Icofont from "react-icofont";
import ConForm from "../layouts/ConForm";
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
              <div className="con-card" key={contact.name}>
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
                <a href={social.status} className="soc" key={social.name}>
                  <Icofont icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <ConForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
