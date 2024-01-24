import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

function Hakkimizda() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "eng";

  const content = {
    eng: {
      title: "About Us",
      description: "Our company aims to take a leading role in the healthcare sector, aspiring to be a reliable guide in the health journeys of patients. Operating as a health agency, our company works with an expert team to provide tailored solutions for the unique needs of patients.\n\nOur mission is to provide all the resources needed to strengthen, improve, and protect the health of our patients. In this context, we aim to assist our patients in finding the most suitable healthcare services and answering all their health-related questions.\n\nPatient satisfaction is our priority, and by focusing on the unique needs of each patient, we commit to providing personalized and effective services. We are always here for you in matters related to health. We are here to support you in your health and well-being."
    },
    tr: {
      title: "Hakkımızda",
      description: "Firmamız, sağlık sektöründe öncü bir rol üstlenerek hastaların sağlık yolculuklarında güvenilir bir rehber olmayı hedefler. Sağlık acentesi olarak faaliyet gösteren firmamız, hastaların benzersiz ihtiyaçlarına özel çözümler sunmak için uzman bir ekiple birlikte çalışmaktadır.\n\nMisyonumuz, hastalarımızın sağlığını güçlendirmek, geliştirmek ve en üst düzeyde korumak için gereken her türlü kaynağı sağlamaktır. Bu bağlamda, hastalarımıza en uygun sağlık hizmetlerine yönlendirme yaparak, sağlıkla ilgili tüm sorularına yanıt bulmalarına yardımcı olmayı amaçlıyoruz.\n\nHasta memnuniyeti bizim için önceliklidir ve her hastamızın benzersiz ihtiyaçlarına odaklanarak, kişiselleştirilmiş ve etkili bir hizmet sunmayı taahhüt ediyoruz. Sağlıkla ilgili konularda her zaman yanınızdayız. Size sağlık ve refahınızda destek olmak için buradayız."
    },
    ar: {
      title: "حول الشركة",
      description: "تهدف شركتنا إلى أداء دور رائد في قطاع الرعاية الصحية، طموحةً أن تكون مرشداً موثوقًا في رحلات الصحة للمرضى. تعمل شركتنا كوكالة صحية بالتعاون مع فريق من الخبراء لتقديم حلول مخصصة لاحتياجات المرضى الفريدة.\n\nمهمتنا هي توفير جميع الوسائل اللازمة لتعزيز وتحسين وحماية صحة مرضانا. في هذا السياق، نهدف إلى مساعدة مرضانا في العثور على أنسب خدمات الرعاية الصحية والإجابة على جميع أسئلتهم المتعلقة بالصحة.\n\nرضا المريض هو أولويتنا، ومن خلال التركيز على الاحتياجات الفريدة لكل مريض، نلتزم بتقديم خدمات مخصصة وفعّالة. نحن دائما هنا من أجلك فيما يتعلق بالصحة. نحن هنا لدعمك في صحتك ورفاهيتك."
    },
    rus: {
      title: "О нас",
      description: "Наша компания стремится занять ведущую роль в сфере здравоохранения, стремясь быть надежным гидом в здоровье пациентов. Действуя как здравоохранительное агентство, наша компания работает с опытной командой для предоставления индивидуальных решений для уникальных потребностей пациентов.\n\nНаша миссия - предоставить все необходимые ресурсы для укрепления, улучшения и защиты здоровья наших пациентов. В этом контексте мы стремимся помочь нашим пациентам найти наиболее подходящие медицинские услуги и ответить на все их вопросы, связанные со здоровьем.\n\nУдовлетворение пациента - наш приоритет, и фокусируясь на уникальных потребностях каждого пациента, мы обязуемся предоставлять персонализированные и эффективные услуги. Мы всегда здесь для вас по вопросам, связанным со здоровьем. Мы здесь, чтобы поддержать вас в вашем здоровье и благополучии."
    }
  };

  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="hakkimizda-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">{content[selectedLanguage].title}</h3>
              <h5 className="description">
                {content[selectedLanguage].description}
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                //href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-index-page"
                role="button"
                size="lg"
              >
                Buton 1
              </Button>
              <Button
                className="btn-round"
                color="primary"
                //href="https://www.invisionapp.com/now?ref=creativetim"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Buton 2
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hakkimizda;
