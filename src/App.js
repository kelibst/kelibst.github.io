import { useState } from "react";
import Icofont from "react-icofont";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/layouts/SideBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

const App = () => {
  const [show, setShow] = useState(false);
  const rot = show ? "reverse" : "stand";
  return (
    <div className="wrapper">
      <div className="container">
        <HashRouter>
          <SideBar show={show} />
          <div className="btn-container">
            <button
              type="button"
              className={`btn btn-menu ${rot}`}
              onClick={() => setShow(!show)}
            >
              <Icofont icon="rounded-right icofont-2x" />
            </button>
          </div>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route  path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
