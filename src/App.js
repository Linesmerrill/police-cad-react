import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import Header from "./Home/Nav0";
import Footer from "./Home/Footer1";
import Home from "./Home";
import PenalCodes from "./PenalCodes";

import { Nav00DataSource, Footer10DataSource } from "./Common/data.source.js";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // Support for mobile resolutions
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/penal-codes" element={<PenalCodes />} />
          </Routes>
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
