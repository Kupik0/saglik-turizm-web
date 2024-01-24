import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function Iletisim() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const isArabic = selectedLanguage === "ar";
  const isRussian = selectedLanguage === "rus";

  const contactInfo = {
    eng: {
      title: "Contact",
      address: "Kırkkonaklar mah. 3334. sk 3116.cd 11/11 Çankaya/ANKARA Kat 11. Acele apartmanı.",
      phone: "+90 123 456 789",
      fax: "+90 123 456 789",
      email: "info@example.com",
      followTwitter: "Follow us on Twitter!",
      likeFacebook: "Like us on Facebook!",
      followLinkedin: "Follow us on Linkedin!",
    },
    tr: {
      title: "İletişim",
      address: "Kırkkonaklar mah. 3334. sk 3116.cd 11/11 Çankaya/ANKARA Kat 11. Acele apartmanı.",
      phone: "+90 123 456 789",
      fax: "+90 123 456 789",
      email: "info@example.com",
      followTwitter: "Bizi Twitter'da Takip Edin!",
      likeFacebook: "Bizi Facebook'ta Beğenin!",
      followLinkedin: "Bizi Linkedin'da Takip Edin!",
    },
    ar: {
      title: "اتصل بنا",
      address: "محافظة الخير، شارع السعادة، بناية السلام",
      phone: "+90 123 456 789",
      fax: "+90 123 456 789",
      email: "info@example.com",
      followTwitter: "تابعنا على تويتر!",
      likeFacebook: "أعجب بنا على فيسبوك!",
      followLinkedin: "تابعنا على لينكد إن!",
    },
    rus: {
      title: "Контакты",
      address: "Киркконаклар мах. 3334. ул. 3116. д. 11/11 Чанкая/АНКАРА Этаж 11. Срочный дом.",
      phone: "+90 123 456 789",
      fax: "+90 123 456 789",
      email: "info@example.com",
      followTwitter: "Подписывайтесь на нас в Твиттере!",
      likeFacebook: "Нравится нам на Facebook!",
      followLinkedin: "Подписывайтесь на нас в Linkedin!",
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
              <h3 className="title">{isRussian ? contactInfo.rus.title : (isArabic ? contactInfo.ar.title : contactInfo[selectedLanguage].title)}</h3>
              <p className="contact-info">
                <strong>{isRussian ? "Адрес" : (isArabic ? "عنوان" : "Adres")}</strong>: {isRussian ? contactInfo.rus.address : (isArabic ? contactInfo.ar.address : contactInfo[selectedLanguage].address)} <br />
                <strong>{isRussian ? "Телефон" : (isArabic ? "هاتف" : "Telefon")}</strong>: {contactInfo[selectedLanguage].phone} <br />
                <strong>Fax:</strong> {contactInfo[selectedLanguage].fax} <br />
                <strong>Email:</strong> {contactInfo[selectedLanguage].email}
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
                {isRussian ? contactInfo.rus.followTwitter : (isArabic ? contactInfo.ar.followTwitter : contactInfo[selectedLanguage].followTwitter)}
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
                {isRussian ? contactInfo.rus.likeFacebook : (isArabic ? contactInfo.ar.likeFacebook : contactInfo[selectedLanguage].likeFacebook)}
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
                {isRussian ? contactInfo.rus.followLinkedin : (isArabic ? contactInfo.ar.followLinkedin : contactInfo[selectedLanguage].followLinkedin)}
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Iletisim;
