/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  const pageHeader = React.createRef();
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/background.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              style={{ maxWidth: "50%" }}
              src={require("assets/img/anatolianlogowhite.png")}
            ></img>
            <h4 style={{ marginTop: "20px" }}>
              {selectedLanguage === "eng" 
                ? "From your home, to your health..." 
                : selectedLanguage === "ar" 
                  ? "من منزلك، إلى صحتك..."
                  : selectedLanguage === "tr"
                    ? "Evinizden,sağlığınıza..."
                    : selectedLanguage === "deu"
                      ? "Von Ihrem Zuhause zu Ihrer Gesundheit..."
                      : selectedLanguage === "rus" ? "От вашего дома к вашему здоровью..."
                      : "Desde tu hogar, hacia tu salud..."}
            </h4>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
