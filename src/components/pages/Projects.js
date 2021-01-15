import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";

import AllProjects from "./AllProjects";
import "./Projects.scss";
import RailsProjects from "./RailsProjects";
import ReactProjects from "./ReactProjects";

const Projects = () => {
 
  return (
    <div className="pro">
      <div className="pro-cont">
        <div className="pro-connt">
          <nav className="pro-nav">
            <ul className="pro-ul">
              <li className="pro-li">
                <NavLink to="/projects/all" className="pro-link">
                  All Projects
                </NavLink>
              </li>
              <li className="pro-li">
                <NavLink to="/projects/react" className="pro-link">
                  React
                </NavLink>
              </li>
              <li className="pro-li">
                <NavLink to="/projects/rails" className="pro-link">
                  Rails
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="pro-det">
            <Switch>
            <Route path="/projects/all" component={AllProjects} />
            <Route path="/projects/react" component={ReactProjects} />
            <Route path="/projects/rails" component={RailsProjects} />
            <Route exact path="/projects/" component={AllProjects} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Projects);
