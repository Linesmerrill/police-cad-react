import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import Header from "./Home/Nav0";
import Footer from "./Home/Footer1";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Faq from "./Faq";

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
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route
              exact
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
