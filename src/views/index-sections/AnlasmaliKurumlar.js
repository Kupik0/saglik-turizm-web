import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row } from "reactstrap";

function AnlasmaliKurumlar() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const isArabic = selectedLanguage === "ar";
  const isGerman = selectedLanguage === "deu";
  const isSpanish = selectedLanguage === "esp";
  const isRussian = selectedLanguage === "rus";

  const content = {
    eng: {
      title: "Affiliated Institutions",
      description: "As Focus of Care, we establish strong collaborations with expert and reliable healthcare institutions. We work closely with these institutions to ensure our clients have access to the highest quality healthcare services. We facilitate treatment processes and maximize examination and treatment opportunities.",
      buttonText: "Get Detailed Information",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    },
    tr: {
      title: "Anlaşmalı Kurumlar",
      description: "Focus of Care olarak, sağlık alanında uzmanlaşmış وقبول sağlık kurumları ile sıkı işbirlikleri kuruyoruz. Danışanlarımızın en üst düzeyde kaliteli sağlık hizmetlerine erişimini sağlamak adına bu kurumlarla yakın çalışıyoruz. Tedavi süreçlerini kolaylaştırıyor, muayene ve tedavi imkanlarını en üst düzeye çıkarıyoruz.",
      buttonText: "Detaylı Bilgi Alın",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    },
    ar: {
      title: "المؤسسات المتعاقدة",
      description: "كـ Focus of Care، نقوم بإقامة تعاونات قوية مع مؤسسات الرعاية الصحية المتخصصة والموثوقة. نعمل عن كثب مع هذه المؤسسات لضمان أن لدى عملائنا الوصول إلى أعلى جودة في خدمات الرعاية الصحية. نسهل عمليات العلاج ونعظم فرص الفحص والعلاج.",
      buttonText: "الحصول على معلومات مفصلة",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    },
    deu: {
      title: "Angeschlossene Einrichtungen",
      description: "Als Focus of Care etablieren wir starke Zusammenarbeiten mit erfahrenen und zuverlässigen Gesundheitseinrichtungen. Wir arbeiten eng mit diesen Einrichtungen zusammen, um sicherzustellen, dass unsere Kunden Zugang zu qualitativ hochwertigen Gesundheitsdienstleistungen haben. Wir erleichtern die Behandlungsprozesse und maximieren die Möglichkeiten für Untersuchungen und Behandlungen.",
      buttonText: "Detaillierte Informationen erhalten",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    },
    esp: {
      title: "Instituciones Afiliadas",
      description: "Como Focus of Care, establecemos colaboraciones sólidas con instituciones de salud expertas y confiables. Trabajamos estrechamente con estas instituciones para asegurar que nuestros clientes tengan acceso a servicios de salud de la más alta calidad. Facilitamos los procesos de tratamiento y maximizamos las oportunidades de examen y tratamiento.",
      buttonText: "Obtener información detallada",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    },
    rus: {
      title: "Аффилированные учреждения",
      description: "Как Focus of Care, мы устанавливаем крепкие партнерские отношения с опытными и надежными медицинскими учреждениями. Мы тесно сотрудничаем с этими учреждениями, чтобы обеспечить нашим клиентам доступ к высококачественным медицинским услугам. Мы облегчаем процессы лечения и максимизируем возможности обследования и лечения.",
      buttonText: "Получить подробную информацию",
      image1: require("assets/img/maxresdefault.jpg"),
      image2: require("assets/img/hastane2.jpg")
    }
  };

  return (
    <>
      <div className="section section-examples" id="anlasmalikurumlar-section" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <h2 className="title">
            {isArabic
              ? content.ar.title
              : isGerman
              ? content.deu.title
              : isSpanish
              ? content.esp.title
              : isRussian
              ? content.rus.title
              : content[selectedLanguage].title}
          </h2>
          <p className="description">
            {isArabic
              ? content.ar.description
              : isGerman
              ? content.deu.description
              : isSpanish
              ? content.esp.description
              : isRussian
              ? content.rus.description
              : content[selectedLanguage].description}
          </p>
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={isArabic ? content.ar.image1 : isGerman ? content.deu.image1 : isSpanish ? content.esp.image1 : isRussian ? content.rus.image1 : content[selectedLanguage].image1}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                {isArabic ? content.ar.buttonText : isGerman ? content.deu.buttonText : isSpanish ? content.esp.buttonText : isRussian ? content.rus.buttonText : content[selectedLanguage].buttonText}
              </Button>
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={isArabic ? content.ar.image2 : isGerman ? content.deu.image2 : isSpanish ? content.esp.image2 : isRussian ? content.rus.image2 : content[selectedLanguage].image2}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/profile-page"
                outline
                tag={Link}
              >
                {isArabic ? content.ar.buttonText : isGerman ? content.deu.buttonText : isSpanish ? content.esp.buttonText : isRussian ? content.rus.buttonText : content[selectedLanguage].buttonText}
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AnlasmaliKurumlar;
