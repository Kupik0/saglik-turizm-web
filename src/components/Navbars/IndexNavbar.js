/*eslint-disable*/
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
    // Dil değişikliği durumunda gerekirse ek işlemler yapabilirsiniz
  };

  const sections = [
    { id: "hizmetlerimiz-section", icon: "location_world", eng: "Services", tr: "Hizmetlerimiz", ar: "الخدمات", rus: "Услуги", deu: "Dienstleistungen", esp: "Servicios" },
    { id: "anlasmalikurumlar-section", icon: "health_ambulance", eng: "Affiliated Institutions", tr: "Anlaşmalı Kurumlar", ar: "المؤسسات المتعاقدة", rus: "Подразделения", deu: "Angeschlossene Einrichtungen", esp: "Instituciones Afiliadas" },
    { id: "hakkimizda-section", icon: "travel_info", eng: "About Us", tr: "Hakkımızda", ar: "معلومات عنا", rus: "О нас", deu: "Über uns", esp: "Sobre nosotros" },
    { id: "iletisim-section", icon: "ui-1_send", eng: "Contact", tr: "İletişim", ar: "اتصل", rus: "Контакт", deu: "Kontakt", esp: "Contacto" },
  ];

  const socialMediaLinks = [
    { id: "twitter-tooltip", icon: "fab fa-twitter", text: "Twitter", },
    { id: "facebook-tooltip", icon: "fab fa-facebook-square", text: "Facebook", },
    { id: "instagram-tooltip", icon: "fab fa-instagram", text: "Instagram",  },
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
              {selectedLanguage === "rus" ? "Anatolian Health Tours" : selectedLanguage === "ar" ? "Anatolian Health Tours" : selectedLanguage === "deu" ? "Anatolian Health Tours": selectedLanguage === "esp" ? "Anatolian Health Tours" : "Anatolian Health Tours"}
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              {selectedLanguage === "rus" ? "Здоровье, туризм" : selectedLanguage === "ar" ? "الصحة، السياحة" : selectedLanguage === "deu" ? "Gesundheit, Tourismus" : selectedLanguage === "esp" ? "Salud, Turismo" : "Sağlık, Turizm"}
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
              {/* Sosyal Medya Bağlantıları */}
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
                    {`Bizi takip et: ${socialMedia.text}`}
                  </UncontrolledTooltip>
                </NavItem>
              ))}
              {/* Dil Dropdown */}
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
                  <DropdownItem onClick={() => handleLanguageChange("deu")}>
                    Deutsch
                  </DropdownItem>
                  <DropdownItem onClick={() => handleLanguageChange("esp")}>
                    Español
                  </DropdownItem>
                  {/* Gerekirse daha fazla dil seçeneği ekleyin */}
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
