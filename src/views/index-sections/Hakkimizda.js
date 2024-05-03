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
    },
    deu: {
      title: "Über uns",
      description: "Unser Unternehmen strebt danach, eine führende Rolle im Gesundheitswesen zu übernehmen und ein verlässlicher Wegweiser auf den Gesundheitsreisen der Patienten zu sein. Als Gesundheitsagentur arbeitet unser Unternehmen mit einem Expertenteam zusammen, um maßgeschneiderte Lösungen für die einzigartigen Bedürfnisse der Patienten bereitzustellen.\n\nUnsere Mission ist es, alle erforderlichen Ressourcen bereitzustellen, um die Gesundheit unserer Patienten zu stärken, zu verbessern und zu schützen. In diesem Kontext streben wir danach, unsere Patienten dabei zu unterstützen, die am besten geeigneten Gesundheitsdienstleistungen zu finden und alle ihre gesundheitsbezogenen Fragen zu beantworten.\n\nDie Zufriedenheit der Patienten hat für uns oberste Priorität, und indem wir uns auf die einzigartigen Bedürfnisse jedes Patienten konzentrieren, verpflichten wir uns, personalisierte und effektive Dienstleistungen bereitzustellen. Wir sind immer für Sie da in Angelegenheiten, die die Gesundheit betreffen. Wir sind hier, um Sie bei Ihrer Gesundheit und Ihrem Wohlbefinden zu unterstützen."
    },
    esp: {
      title: "Sobre nosotros",
      description: "Nuestra empresa tiene como objetivo desempeñar un papel destacado en el sector de la salud, aspirando a ser una guía confiable en los viajes de salud de los pacientes. Operando como una agencia de salud, nuestra empresa trabaja con un equipo de expertos para proporcionar soluciones a medida para las necesidades únicas de los pacientes.\n\nNuestra misión es proporcionar todos los recursos necesarios para fortalecer, mejorar y proteger la salud de nuestros pacientes. En este contexto, buscamos ayudar a nuestros pacientes a encontrar los servicios de salud más adecuados y responder a todas sus preguntas relacionadas con la salud.\n\nLa satisfacción del paciente es nuestra prioridad, y al centrarnos en las necesidades únicas de cada paciente, nos comprometemos a brindar servicios personalizados y efectivos. Siempre estamos aquí para usted en asuntos relacionados con la salud. Estamos aquí para apoyarlo en su salud y bienestar."
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
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hakkimizda;
