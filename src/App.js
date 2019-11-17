import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Prismic from "prismic-javascript";
import PrismicReact from "prismic-reactjs";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Frontpage from "./components/Frontpage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [prismic, setPrismic] = useState();
  useEffect(() => {
    Prismic.api("http://portfolio-aesa.prismic.io/api/v2").then(api => {
      setPrismic(api);
    });
  }, []);
  return (
    <div className="App">
      <div className="frontpage-image"></div>
      <Header prismic={prismic} />
      <Router>
        <route path="/home" exact>
          <Frontpage prismic={prismic} />
        </route>
        <route path="/awesome">
          <About prismic={prismic} />
        </route>
        <route path="/portfolio ">
          <Portfolio prismic={prismic} />
        </route>
      </Router>
      <Footer prismic={prismic} />
    </div>
  );
};

export default App;
