import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function Iletisim() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const isArabic = selectedLanguage === "ar";
  const isRussian = selectedLanguage === "rus";
  const isGerman = selectedLanguage === "deu";
  const isSpanish = selectedLanguage === "esp";

  const contactInfo = {
    eng: {
      title: "Contact",
      address:  "Dinek, Zamanoğlu Street No: 29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "Follow us on Twitter!",
      likeFacebook: "Like us on Facebook!",
      followLinkedin: "Follow us on Linkedin!",
    },
    tr: {
      title: "İletişim",
      address: "Dinek Mah. Zamanoğlu Cad no: 29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "Bizi Twitter'da Takip Edin!",
      likeFacebook: "Bizi Facebook'ta Beğenin!",
      followLinkedin: "Bizi Linkedin'da Takip Edin!",
    },
    ar: {
      title: "اتصل بنا",
      address:"Dinek حيّ , Zamanoğlu شارع no:29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "تابعنا على تويتر!",
      likeFacebook: "أعجب بنا على فيسبوك!",
      followLinkedin: "تابعنا على لينكد إن!",
    },
    rus: {
      title: "Контакты",
      address:"Dinek Mah. Zamanoğlu Cad no: 29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "Подписывайтесь на нас в Твиттере!",
      likeFacebook: "Нравится нам на Facebook!",
      followLinkedin: "Подписывайтесь на нас в Linkedin!",
    },
    deu: {
      title: "Kontakt",
      address:"Dinek Mah. Zamanoğlu Cad no: 29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "Folge uns auf Twitter!",
      likeFacebook: "Gefällt mir auf Facebook!",
      followLinkedin: "Folge uns auf Linkedin!",
    },
    esp: {
      title: "Contacto",
      address: "Dinek Mah. Zamanoğlu Cad no: 29/2 Alanya/Antalya",
      phone: "0242 511 77 21",
      followTwitter: "Síguenos en Twitter!",
      likeFacebook: "Me gusta en Facebook!",
      followLinkedin: "Síguenos en Linkedin!",
    },
  };

  return (
    <>
      <div
        className="section section-iletisim"
        data-background-color="black"
        id="iletisim-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">{isSpanish ? contactInfo.esp.title : (isGerman ? contactInfo.deu.title : (isRussian ? contactInfo.rus.title : (isArabic ? contactInfo.ar.title : contactInfo[selectedLanguage].title)))}</h3>
              <p className="contact-info">
                <strong>{isSpanish ? "Dirección" : (isGerman ? "Adresse" : (isArabic ? "عنوان" : "Adres"))}</strong>: {isSpanish ? contactInfo.esp.address : (isGerman ? contactInfo.deu.address : (isArabic ? contactInfo.ar.address : contactInfo[selectedLanguage].address))} <br />
                <strong>{isSpanish ? "Teléfono" : (isGerman ? "Telefon" : (isArabic ? "هاتف" : "Telefon"))}</strong>: {contactInfo[selectedLanguage].phone} <br />
                <br />
           
              </p>
            </Col>
          </Row>

          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                {isSpanish ? contactInfo.esp.followTwitter : (isGerman ? contactInfo.deu.followTwitter : (isRussian ? contactInfo.rus.followTwitter : (isArabic ? contactInfo.ar.followTwitter : contactInfo[selectedLanguage].followTwitter)))}
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                {isSpanish ? contactInfo.esp.likeFacebook : (isGerman ? contactInfo.deu.likeFacebook : (isRussian ? contactInfo.rus.likeFacebook : (isArabic ? contactInfo.ar.likeFacebook : contactInfo[selectedLanguage].likeFacebook)))}
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                {isSpanish ? contactInfo.esp.followLinkedin : (isGerman ? contactInfo.deu.followLinkedin : (isRussian ? contactInfo.rus.followLinkedin : (isArabic ? contactInfo.ar.followLinkedin : contactInfo[selectedLanguage].followLinkedin)))}
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Iletisim;
