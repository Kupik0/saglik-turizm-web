import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./hizmetlerimiz.css"; // New CSS file

function Hizmetlerimiz() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const isArabic = selectedLanguage === "ar";
  const isRussian = selectedLanguage === "rus";

  const content = {
    eng: {
      title: "Our Services",
      description: "As a Health Agency, your health is our priority. We are here to respond to your needs in the most effective and attentive way. Working with our expert team, we strive to protect your health and provide the highest quality service. We work together to offer you tailored solutions to enhance your health and quality of life.",
      cards: [
        {
          title: "Free Transfer",
          description: "We meet you at the airport and safely transport you to your accommodation with a free transfer."
        },
        {
          title: "Hotel Reservation",
          description: "To explore the beauties of the Mediterranean, we design a special accommodation and holiday experience for you in Antalya."
        },
        {
          title: "Personal Interpreter",
          description: "With our expert interpreter team, we provide the most effective communication solutions for you."
        },
        {
          title: "Affiliated Health Institutions",
          description: "Your health and the health of your loved ones are important to us. Therefore, we commit to providing better service by working with affiliated health institutions."
        }
      ]
    },
    tr: {
      title: "Hizmetlerimiz",
      description: "Sağlık Acentesi olarak, sizin sağlığınız bizim önceliğimizdir. İhtiyaçlarınıza en etkili ve özenli şekilde yanıt vermek için buradayız. Sağlığınızı korumak ve en kaliteli hizmeti sunmak adına uzman ekibimizle birlikte çalışıyoruz. Size özel çözümler sunarak, sağlık ve yaşam kalitenizi artırmak için elbirliğiyle çaba gösteriyoruz.",
      cards: [
        {
          title: "Ücretsiz Transfer",
          description: "Sizi havaalanında karşılayarak, konaklayacağınız yere ücretsiz bir transferle sizi güvenli bir şekilde taşıyoruz."
        },
        {
          title: "Otel Rezervasyonu",
          description: "Akdeniz’in güzelliklerini keşfetmek için Antalya’da, size özel bir konaklama ve tatil deneyimi tasarlıyoruz."
        },
        {
          title: "Özel Tercüman",
          description: "Uzman tercüman kadromuzla, sizin için en etkili iletişim çözümlerini sunuyoruz."
        },
        {
          title: "Anlaşmalı Sağlık Kurumları",
          description: "Sizin ve sevdiklerinizin sağlığı bizim için önemlidir ve bu nedenle anlaşmalı sağlık kurumlarıyla birlikte çalışarak size daha iyi hizmet sunmayı taahhüt ediyoruz."
        }
      ]
    },
    ar: {
      title: "خدماتنا",
      description: "كوكالة صحية، صحتك هي أولويتنا. نحن هنا للرد على احتياجاتك بأكثر طريقة فعالة ومراعية. نعمل مع فريقنا المتخصص لحماية صحتك وتقديم أعلى جودة خدمة. نعمل معًا لنقدم لك حلاً مخصصًا لتعزيز صحتك وجودة حياتك.",
      cards: [
        {
          title: "نقل مجاني",
          description: "نلتقي بك في المطار ونقوم بنقلك بأمان إلى مكان إقامتك مع نقل مجاني."
        },
        {
          title: "حجز الفندق",
          description: "لاستكشاف جمال البحر الأبيض المتوسط، نقوم بتصميم تجربة إقامة وعطلة خاصة لك في أنطاليا."
        },
        {
          title: "مترجم شخصي",
          description: "مع فريق المترجمين الخبراء لدينا، نقدم أفضل حلول الاتصال لك."
        },
        {
          title: "المؤسسات الصحية المتعاقدة",
          description: "صحتك وصحة أحبائك تهمنا. لذلك، نلتزم بتقديم خدمة أفضل من خلال العمل مع المؤسسات الصحية المتعاقدة."
        }
      ]
    },
    rus: {
      title: "Наши услуги",
      description: "Как агентство по здравоохранению, ваше здоровье - наш приоритет. Мы здесь, чтобы отвечать на ваши потребности наиболее эффективным и внимательным образом. Совместно с нашей экспертной командой мы стремимся защищать ваше здоровье и предоставлять высококачественное обслуживание. Мы работаем вместе, чтобы предложить вам индивидуальные решения для улучшения вашего здоровья и качества жизни.",
      cards: [
        {
          title: "Бесплатный трансфер",
          description: "Мы встречаем вас в аэропорту и безопасно доставляем вас в ваше жилье с бесплатным трансфером."
        },
        {
          title: "Бронирование отеля",
          description: "Чтобы исследовать красоты Средиземного моря, мы разрабатываем для вас особый опыт проживания и отдыха в Анталии."
        },
        {
          title: "Личный переводчик",
          description: "С нашей командой опытных переводчиков мы предоставляем наиболее эффективные решения для вашего общения."
        },
        {
          title: "Связанные с нами медицинские учреждения",
          description: "Ваше здоровье и здоровье ваших близких важны для нас. Поэтому мы обязуемся предоставлять более качественное обслуживание, сотрудничая с связанными медицинскими учреждениями."
        }
      ]
    }
  };

  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="hizmetlerimiz-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">{isRussian ? content.rus.title : (isArabic ? content.ar.title : content[selectedLanguage].title)}</h3>
              <h5 className="description">
                {isRussian ? content.rus.description : (isArabic ? content.ar.description : content[selectedLanguage].description)}
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {content[isRussian ? "rus" : (isArabic ? "ar" : selectedLanguage)].cards.map((card, index) => (
              <Col key={index} lg="3" md="6" className="animated-card">
                <div className="info">
                  <div className="description">
                    <h4 className="info-title">{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hizmetlerimiz;
