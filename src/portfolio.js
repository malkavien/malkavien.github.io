/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rafael de Almeida Rodrigues",
  title: "Olá, eu sou o Rafael 👋",
  subTitle:
    "Desenvolvedor Backend com +5 anos de experiência em Node.js e TypeScript. Especialista em APIs REST, Webhooks e soluções performáticas orientadas ao negócio. Experiência com liderança técnica, migração de sistemas e mentoria de desenvolvedores.",
  resumeLink:
    "https://github.com/malkavien/curriculo/blob/main/Curriculo%20Rafael%20Rodrigues.pdf",
  portfolio_repository: "https://github.com/malkavien/developerFolio",
};

const socialMediaLinks = {
  github: "https://github.com/malkavien",
  linkedin: "https://www.linkedin.com/in/rafaelrodrigues-04184757/",
};

const skillsSection = {
  title: "Habilidades",
  subTitle: "Tecnologias e ferramentas com as quais trabalho no dia a dia",
  skills: [
    "⚡ Desenvolvimento de APIs RESTful escaláveis e integrações via Webhooks",
    "⚡ Liderança técnica em projetos de migração de sistemas legados",
    "⚡ Testes automatizados (unitários e de integração)",
    "⚡ Modelagem de banco de dados relacional e uso de Elasticsearch para análise de dados",
  ],
  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "logos:javascript" },
    { skillName: "TypeScript", fontAwesomeClassname: "logos:typescript-icon" },
    { skillName: "Node.js", fontAwesomeClassname: "logos:nodejs-icon" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "logos:postgresql" },
    { skillName: "Elasticsearch", fontAwesomeClassname: "logos:elasticsearch" },
    { skillName: "Docker", fontAwesomeClassname: "logos:docker-icon" },
    { skillName: "Git", fontAwesomeClassname: "fa-brands:git-alt" },
    { skillName: "Firebase", fontAwesomeClassname: "logos:firebase" },
    { skillName: "Kibana", fontAwesomeClassname: "logos:kibana" },
  ],
};

const educationInfo = {
  schools: [
    {
      schoolName: "UFERSA / UERN",
      subHeader: "Mestrado em Ciência da Computação",
      duration: "2017 - 2019",
      desc: "Pesquisa em tecnologias para saúde (ludoterapia para autistas)",
      descBullets: [
        "Desenvolvimento de jogo educacional baseado em ontologias",
        "Liderança em equipe multidisciplinar",
      ],
    },
  ],
};

const experience = {
  sections: [
    {
      title: "Experiência Profissional",
      work: [
        {
          company: "NovaCode",
          role: "Desenvolvedor Backend Pleno",
          duration: "2021 – Atualmente",
          desc: "Atuação como líder técnico em projetos com foco em sistemas escaláveis.",
          descBullets: [
            "Migração de sistemas legados",
            "Criação de APIs RESTful",
            "Integrações com terceiros via Webhooks",
            "Mentoria de desenvolvedores e testes automatizados",
          ],
        },
        {
          company: "RCosta",
          role: "Analista de Dados",
          duration: "2019 – 2021",
          desc: "Trabalho com análise de dados e suporte a decisões estratégicas.",
          descBullets: [
            "Criação de dashboards com Kibana",
            "Modelagem e indexação em Elasticsearch",
            "Geração de insights para áreas de negócio",
          ],
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      id: "1",
      name: "Sistema de Pagamentos via PIX",
      url: "https://github.com/malkavien",
      description:
        "Sistema backend com integração PIX, webhooks e automação de conciliamento bancário usando filas.",
    },
    {
      id: "2",
      name: "Gerenciador de Notas Fiscais Eletrônicas",
      url: "https://github.com/malkavien",
      description:
        "Emissão e controle de NF-e/NFC-e com integração à SEFAZ e validação automática.",
    },
  ],
};

const contactInfo = {
  title: "Entre em contato",
  subtitle: "Aberto para oportunidades como Desenvolvedor Backend ou Tech Lead.",
  number: "(84) 99915-9061",
  email_address: "rafael.pomeu@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  experience,
  projects,
  contactInfo,
};
