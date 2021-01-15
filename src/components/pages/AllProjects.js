import React from "react";
import Icofont from "react-icofont";

const AllProjects = () => {
  const pros = [
    {
      name: "NinjaSkrill",
      tech: "JavaScript",
      icon:
        "https://raw.githubusercontent.com/kelibst/ninjaskrill/main/src/assets/img/screenshot.gif",
      link: "https://github.com/kelibst/ninjaskrill",
      tools: ["Phaser 3", "Jest", "WebPack"],
      live_link: "https://raw.githack.com/kelibst/ninjaskrill/feature/dist/index.html",
    },
    {
        name: "Ruby Hang-man Game",
        tech: "Ruby",
        icon:
          "https://raw.githubusercontent.com/kelibst/ruby-hang-me/main/screenshot.gif",
        link: "https://github.com/kelibst/ruby-hang-me",
        tools: [ "Ruby"],
      },
      {
        name: "React Movies App",
        tech: "React",
        icon:
          "https://github.com/kelibst/movieis_king/raw/main/screenshot.gif",
        link: "https://github.com/kelibst/ninjaskrill",
        live_link: "https://kelimovies.herokuapp.com/",
        tools: ["React", "WebPack", "Heroku", "Eslint", "Stylelint", "SCSS"],
      },
    
    {
      name: "Li-Houses",
      tech: "React & Rails",
      icon:
        "https://raw.githubusercontent.com/kelibst/li-houses-react/main/screenshot.gif",
      link: "https://github.com/kelibst/li-houses-react",
      live_link: "http://lihouses-react.herokuapp.com/",
      tools: [
        "Ruby",
        "Rails",
        "React",
        "Redux",
        "Heroku",
        "StyleLint",
        "Eslint",
        "NPM",
        "SCSS"
      ],
    },
    {
        name: "Hospitals Reviews Manager",
        tech: "React & Rails",
        icon:
          "https://raw.githubusercontent.com/kelibst/hospitalreviews-react/main/screenshot.gif",
        link: "https://github.com/kelibst/hospitalreviews-react",
        live_link: "https://hospitalreviews-react.herokuapp.com/",
        tools: [
          "Ruby",
          "Rails",
          "React",
          "Redux",
          "Heroku",
          "StyleLint",
          "Eslint",
          "NPM",
          "SCSS"
        ],
      },

      {
        name: "Legend of Zelda Fan Page",
        tech: "Rails",
        icon:
          "https://raw.githubusercontent.com/kelibst/zelda-fan-page/dev/app/assets/images/screen2.png",
        link: "https://github.com/kelibst/zelda-fan-page",
        live_link: "https://zelda-community.herokuapp.com/",
        tools: [
          "Ruby",
          "Rails",
          "Heroku",
          "StyleLint",
          "Eslint",
          "NPM",
          "JavaScript",
          "SCSS"
        ],
      },
  ];
  
  return (
    <div className="all">
      {pros.map((pro) => (
        <div className="pro-card" key={pro.name}>
          <div className="pro-card-icon">
            <img src={pro.icon} alt="" className="pro-img" />
            <p className="pro-tech">{pro.tech}</p>
            <a target="_blank" href={pro.live_link ? pro.live_link : pro.link} className="pro-card-name">
              <Icofont className="pro-ico" icon="plus" />
            </a>
          </div>
          <a href={pro.link} className="pro-card-name">
            {pro.name}
          </a>
          <div className="pro-card-de">
            {pro.tools &&
              pro.tools.map((tool) => <li className="pro-tool">{tool}</li>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
