import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Hizmetlerimiz from "./index-sections/Hizmetlerimiz.js";
import Hakkimizda from "./index-sections/Hakkimizda.js";
import Iletisim from "./index-sections/Iletisim.js";
import AnlasmaliKurumlar from "./index-sections/AnlasmaliKurumlar.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Hizmetlerimiz />
          <AnlasmaliKurumlar />
          <Hakkimizda />
          <Iletisim />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
