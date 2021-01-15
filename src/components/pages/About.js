import React from "react";
import Icofont from "react-icofont";
import "./About.scss";
const About = () => {
  const infos = [
    {
      name: "4 years Coding",
      status: "Experience",
      icon: "badge",
    },
    {
      name: "72 + Projects",
      status: "Completed",
      icon: "papers",
    },
    {
      name: "Freelance",
      status: "Available",
      icon: "worker",
    },
    {
      name: "Support",
      status: "24 / 7",
      icon: "live-support",
    },
  ];

  const interests = [
    {
      name: "Linux",
      icon: "dolphin",
    },
    {
      name: "Video Games",
      icon: "game-controller",
    },
    {
      name: "Engineering",
      icon: "engineer",
    },
    {
      name: "History",
      icon: "history",
    },
  ];

  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>
      <div className="about-container">
        <div className="about-profile">
          <a
            href="https://zelda-fan-page.s3.amazonaws.com/keli_portfolio/images/passport4.jpg"
            className="about-pic"
          >
            <img
              className=" img-fluid b-shadow-a"
              alt="User passport picture"
              src="https://zelda-fan-page.s3.amazonaws.com/keli_portfolio/images/passport4.jpg"
            />
          </a>
          <div className="description">
            <h4 className="name">Kekeli Dogbevi Jiresse</h4>
            <h6 className="title">Full-Stack Software Developer</h6>
            <p className="content">
              After I was introduced to my first Linux distribution some years
              back, I developed a deep passion for software development and open
              source community. Since then, a day has not passed where I have
              failed to write some form of code. I look forward to bringing the
              same kind of fire to the right community. I am currently
              proficient in Ruby, Rails, HTML, CSS, JavaScript, and React.
            </p>

            <div className="btn-contents">
              <a href="https://drive.google.com/file/d/1NIOZ-uV3qdVCgSdO6pg05zHf-op0R0rN/view" className="btn btn-yellow">
                Download CV
              </a>
              <a href="/contact" className="btn btn-yellow hollow">
                Hire Me
              </a>
            </div>
          </div>
        </div>
       
        <div className="about-exps"> 
          <div className="about-exp">
            {infos.map((info) => (
              <div className="about-card" key={info.name}>
                <div className="about-card-icon">
                  <Icofont icon={info.icon} />
                </div>
                <div className="about-card-details">
                  <h6 className="about-card-header">{info.name}</h6>
                  <p className="card-desc">{info.status}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="interest">
            {interests.map((interest) => (
              <div className="about-card" key={interest.name}>
                <div className="interest-card-icon">
                  <Icofont icon={interest.icon} />
                </div>
                <div className="about-card-details">
                  <h6 className="about-card-header">{interest.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
