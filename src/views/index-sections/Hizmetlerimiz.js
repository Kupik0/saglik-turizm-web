import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./hizmetlerimiz.css"; // New CSS file

function Hizmetlerimiz() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const isArabic = selectedLanguage === "ar";
  const isRussian = selectedLanguage === "rus";
  const isGerman = selectedLanguage === "deu";
  const isSpanish = selectedLanguage === "esp";
  const content = {

    eng: {
      title: "Our Services",
      description: "As a Health Agency, your health is our priority. We are here to respond to your needs in the most effective and attentive way. Working with our expert team, we strive to protect your health and provide the highest quality service. We work together to offer you tailored solutions to enhance your health and quality of life.",
      cards: [
        {
          title: "Secure transfer",
          description: "We transport you to assist with your procedures from your arrival to our country for your treatment, reaching the treatment, and until your return home."
        },
        {
          title: "Hotel Reservation",
          description: "We invite you to stay in the most beautiful hotels of our country in the most suitable way and discover the beauties of Turkey."
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
          title: "Güvenli transfer",
          description: "Tedaviniz için ülkemize gelişinizden tedaviye ulaşmanız ardından eve dönüşünüze kadar sizinle beraber işlemlerinize yardımcı olmak üzere sizleri taşıyoruz."
        },
        {
          title: "Otel Rezervasyonu / Konaklama",
          description: "Sizleri Ülkemizin en güzel otellerinde en uygun şekilde konaklamaya ve Türkiye’nin güzellikleini keşfetmeye davet ediyoruz."
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
          title: "نقل آمن",
          description:  "نقلك لمساعدتك في إجراءاتك من وصولك إلى بلدنا لتلقي العلاج وحتى عودتك إلى المنزل."
        },
        {
          title: "حجز الفندق",
          description: "ندعوكم للإقامة في أجمل فنادق بلدنا بأفضل الطرق واكتشاف جمالات تركيا."
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
    deu: {
      title: "Unsere Dienstleistungen",
      description: "Als Gesundheitsagentur ist Ihre Gesundheit unsere Priorität. Wir sind hier, um auf Ihre Bedürfnisse auf effektivste und aufmerksamste Weise zu reagieren. Mit unserem Expertenteam streben wir danach, Ihre Gesundheit zu schützen und den bestmöglichen Service zu bieten. Wir arbeiten gemeinsam daran, Ihnen maßgeschneiderte Lösungen zur Verbesserung Ihrer Gesundheit und Lebensqualität anzubieten.",
      cards: [
        {
          title: "Sicherer Transfer",
          description: "Wir transportieren Sie, um Ihnen bei Ihren Verfahren von Ihrer Ankunft in unserem Land für Ihre Behandlung bis zur Rückkehr nach Hause zu helfen."
        },
        {
          title: "Hotelreservierung",
          description:  "Wir laden Sie ein, in den schönsten Hotels unseres Landes auf die günstigste Weise zu übernachten und die Schönheiten der Türkei zu entdecken."
        },
        {
          title: "Persönlicher Dolmetscher",
          description: "Mit unserem Expertenteam für Übersetzung bieten wir Ihnen die effektivsten Kommunikationslösungen."
        },
        {
          title: "Angeschlossene Gesundheitseinrichtungen",
          description: "Ihre Gesundheit und die Gesundheit Ihrer Lieben liegen uns am Herzen. Daher verpflichten wir uns, durch die Zusammenarbeit mit angeschlossenen Gesundheitseinrichtungen einen besseren Service zu bieten."
        }
      ]
    },
    esp: {
      title: "Nuestros Servicios",
      description: "Como Agencia de Salud, su salud es nuestra prioridad. Estamos aquí para responder a sus necesidades de la manera más efectiva y atenta. Trabajando con nuestro equipo de expertos, nos esforzamos por proteger su salud y brindar el servicio de la más alta calidad. Trabajamos juntos para ofrecerle soluciones personalizadas para mejorar su salud y calidad de vida.",
      cards: [
        {
          title: "Transferencia Segura",
          description:"Te transportamos para ayudarte con tus procedimientos desde tu llegada a nuestro país para tu tratamiento, llegando al tratamiento y hasta tu regreso a casa."
        },
        {
          title: "Reserva de Hotel",
          description: "Los invitamos a alojarse en los hoteles más hermosos de nuestro país de la manera más conveniente y a descubrir las bellezas de Turquía."
        },
        {
          title: "Intérprete Personal",
          description: "Con nuestro equipo de intérpretes expertos, proporcionamos las soluciones de comunicación más efectivas para usted."
        },
        {
          title: "Instituciones de Salud Afiliadas",
          description: "Su salud y la de sus seres queridos son importantes para nosotros. Por lo tanto, nos comprometemos a brindar un mejor servicio trabajando con instituciones de salud afiliadas."
        }
      ]
    },
    rus: {
      title: "Наши услуги",
      description: "Как агентство по здравоохранению, ваше здоровье - наш приоритет. Мы здесь, чтобы отвечать на ваши потребности наиболее эффективным и внимательным образом. Совместно с нашей экспертной командой мы стремимся защищать ваше здоровье и предоставлять высококачественное обслуживание. Мы работаем вместе, чтобы предложить вам индивидуальные решения для улучшения вашего здоровья и качества жизни.",
      cards: [
        {
          title: "Безопасный трансфер",
          description: "Мы перевозим вас, чтобы помочь вам с вашими процедурами с момента прибытия в нашу страну для лечения, достижения лечения и до вашего возвращения домой."
        },
        {
          title: "Бронирование отеля",
          description: "Приглашаем вас остановиться в самых красивых отелях нашей страны наиболее удобным способом и открывать красоты Турции."
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
              <h3 className="title">
                {isRussian
                  ? content.rus.title
                  : isArabic
                  ? content.ar.title
                  : isGerman
                  ? content.deu.title
                  : isSpanish
                  ? content.esp.title
                  : content[selectedLanguage].title}
              </h3>
              <h5 className="description">
                {isRussian
                  ? content.rus.description
                  : isArabic
                  ? content.ar.description
                  : isGerman
                  ? content.deu.description
                  : isSpanish
                  ? content.esp.description
                  : content[selectedLanguage].description}
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {content[
              isRussian
                ? "rus"
                : isArabic
                ? "ar"
                : isGerman
                ? "deu"
                : isSpanish
                ? "esp"
                : selectedLanguage
            ].cards.map((card, index) => (
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
