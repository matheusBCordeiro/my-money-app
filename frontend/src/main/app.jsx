import React from "react";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import "../common/template/dependencies";

export default (props) => {
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper"></div>
    <Footer />
  </div>;
};
