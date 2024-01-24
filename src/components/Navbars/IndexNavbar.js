import React from "react";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    localStorage.getItem("selectedLanguage") || "eng"
  );

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    window.location.reload();
    // You can perform additional actions on language change if needed
  };

  const sections = [
    { id: "hizmetlerimiz-section", icon: "location_world", eng: "Services", tr: "Hizmetlerimiz", ar: "الخدمات", rus: "Услуги" },
    { id: "anlasmalikurumlar-section", icon: "health_ambulance", eng: "Affiliated Institutions", tr: "Anlaşmalı Kurumlar", ar: "المؤسسات المتعاقدة", rus: "Подразделения" },
    { id: "hakkimizda-section", icon: "travel_info", eng: "About Us", tr: "Hakkımızda", ar: "معلومات عنا", rus: "О нас" },
    { id: "iletisim-section", icon: "ui-1_send", eng: "Contact", tr: "İletişim", ar: "اتصل", rus: "Контакт" },
  ];

  const socialMediaLinks = [
    { id: "twitter-tooltip", icon: "fab fa-twitter", text: "Twitter", link: "https://twitter.com/CreativeTim?ref=creativetim" },
    { id: "facebook-tooltip", icon: "fab fa-facebook-square", text: "Facebook", link: "https://www.facebook.com/CreativeTim?ref=creativetim" },
    { id: "instagram-tooltip", icon: "fab fa-instagram", text: "Instagram", link: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim" },
  ];

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (window.scrollY > 399) {
        setNavbarColor("");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return () => window.removeEventListener("scroll", updateNavbarColor);
  }, []);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand target="_blank" id="navbar-brand">
              {selectedLanguage === "rus" ? "Фокус заботы" : selectedLanguage === "ar" ? "تركيز الرعاية" : "Focus of Care"}
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              {selectedLanguage === "rus" ? "Здоровье, туризм" : selectedLanguage === "ar" ? "الصحة، السياحة" : "Sağlık, Turizm"}
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              {sections.map((section) => (
                <NavItem key={section.id}>
                  <NavLink
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id).scrollIntoView();
                    }}
                  >
                    <i className={`now-ui-icons ${section.icon}`}></i>
                    <p>{section[selectedLanguage]}</p>
                  </NavLink>
                </NavItem>
              ))}
              {/* Social Media Links */}
              {socialMediaLinks.map((socialMedia) => (
                <NavItem key={socialMedia.id}>
                  <NavLink
                    href={socialMedia.link}
                    target="_blank"
                    id={socialMedia.id}
                  >
                    <i className={socialMedia.icon}></i>
                    <p className="d-lg-none d-xl-none">{socialMedia.text}</p>
                  </NavLink>
                  <UncontrolledTooltip target={`#${socialMedia.id}`}>
                    {`Follow us on ${socialMedia.text}`}
                  </UncontrolledTooltip>
                </NavItem>
              ))}
              {/* Language Dropdown */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="d-flex align-items-center">
                  {selectedLanguage.toUpperCase()}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => handleLanguageChange("eng")}>
                    English
                  </DropdownItem>
                  <DropdownItem onClick={() => handleLanguageChange("tr")}>
                    Türkçe
                  </DropdownItem>
                  <DropdownItem onClick={() => handleLanguageChange("ar")}>
                    العربية
                  </DropdownItem>
                  <DropdownItem onClick={() => handleLanguageChange("rus")}>
                    Русский
                  </DropdownItem>
                  {/* Add more language options as needed */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
