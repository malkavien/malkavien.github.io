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
  title: "Olá, sou Rafael",
  subTitle: emoji(
    "Desenvolvedor Full Stack focado em back-end, com paixão por automações, integrações financeiras (PIX, NF-e, boletos) e soluções robustas com Node.js, TypeScript, PHP e ferramentas modernas de desenvolvimento. 🚀"
  ),
  resumeLink:
    "https://github.com/malkavien/curriculo/blob/main/Curriculo%20Rafael%20Rodrigues.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/malkavien",
  linkedin: "https://www.linkedin.com/in/rafael-rodrigues-04184757/",
  gmail: "rafael.pomeu@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// Skills
const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR BACKEND / FULL STACK ESPECIALIZADO EM INTEGRAÇÕES E SISTEMAS ESCALÁVEIS",
  skills: [
    emoji("⚡ Desenvolvimento de APIs RESTful escaláveis utilizando Node.js, TypeScript e PHP"),
    emoji("⚡ Integrações complexas com APIs de terceiros, Webhooks e sistemas corporativos"),
    emoji("⚡ Arquitetura, manutenção e evolução de sistemas web orientados ao negócio"),
    emoji("⚡ Modelagem e otimização de bancos de dados relacionais (PostgreSQL e MySQL)"),
    emoji("⚡ Desenvolvimento frontend com React e integração completa com backend"),
    emoji("⚡ Testes automatizados (unitários e integração) para garantir qualidade e confiabilidade"),
    emoji("⚡ Dashboards e indicadores financeiros utilizando Elasticsearch, Kibana e Stack ELK"),
    emoji("⚡ Liderança técnica, mentoria de desenvolvedores e apoio em decisões de arquitetura")
  ],
  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Elasticsearch", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Kibana", fontAwesomeClassname: "fas fa-chart-line" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UFERSA / UERN (PPgCC)",
      logo: require("./assets/images/ppgcc.png"),
      subHeader: "Mestrado em Ciência da Computação",
      duration: "Agosto 2016 - Março 2019",
      desc: "Bolsista CNPq. Publicações em Revista qualis A1, dois capítulos de livros, e várias participações em anais e eventos",
      descBullets: [
        "Cognição Inventiva e Tecnologias: a experiência de jovens em oficinas no ambiente sensível da saúde mental.",
        "Redes de cuidado e aprendizagem na saúde mental e na educação."
      ]
    },
    {
      schoolName: "Universidade Federal Rural do Semi-Árido",
      logo: require("./assets/images/logo_ufersa.png"),
      subHeader: "Bacharelado em Ciência da Computação",
      duration: "Agosto 2008 - Março 2016",
      desc: "Desde 2012 é integrante do Núcleo Tecnológico de Engenharia de Software - NTES. Também, desde 2013 é integrante do Programa de Extensão Rede de Oficinandos na Educação e na Saúde.",
      descBullets: ["Tem experiência nos seguintes temas: tecnologias, adaptação dinâmica em jogos digitais e saúde mental."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "APIs e Integrações",
      progressPercentage: "95%"
    },
    {
      Stack: "Banco de Dados",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "BI & Observabilidade",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Desenvolvedor Full Stack / Analista de Sistemas",
      company: "Linkdesign",
      companylogo: require("./assets/images/ld.png"),
      date: "2025 – Atualmente",
      desc: "Manutenção e evolução de sistemas corporativos, desenvolvimento de integrações, novas funcionalidades backend/frontend, otimização de consultas SQL e suporte em ambientes de produção."
    },
    {
      role: "Desenvolvedor Backend Pleno",
      company: "NovaCode",
      companylogo: require("./assets/images/nc.png"),
      date: "2021 – 2025",
      desc: "Liderança técnica em migrações de sistemas legados, desenvolvimento de APIs RESTful escaláveis, integrações com Webhooks e APIs externas, testes automatizados, mentoria de desenvolvedores e apoio em decisões arquiteturais."
    },
    {
      role: "Analista de Dados",
      company: "RCosta",
      companylogo: require("./assets/images/rcosta_logo.png"),
      date: "2019 – 2021",
      desc: "Criação de dashboards estratégicos no Kibana, modelagem e consultas Elasticsearch, BI financeiro e indicadores de faturamento utilizando Stack ELK."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Big Projects
const bigProjects = {
  title: "Projetos de Destaque",
  subtitle: "Alguns sistemas e soluções onde atuei",
  projects: [
    {
      image: require("./assets/images/ld.png"),
      projectName: "Linkdesign",
      projectDesc: "Sistema de gestão escolar, integração com APIs bancárias e controle de acesso.",
      footerLink: [{ name: "GitHub", url: "https://github.com/malkavien" }]
    },
    {
      image: require("./assets/images/nc.png"),
      projectName: "NovaCode",
      projectDesc: "Solução SaaS com emissão de notas, integração com APIs bancárias e controle de acesso.",
      footerLink: [{ name: "GitHub", url: "https://github.com/malkavien" }]
    },
    {
      image: require("./assets/images/rcosta_logo.png"),
      projectName: "RCosta",
      projectDesc: "Dashboard com alertas financeiros utilizando a Stack ELK",
      footerLink: [{ name: "LinkedIn", url: "https://www.linkedin.com/in/rafael-rodrigues-04184757/" }]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Destaques Profissionais 🚀"),
  subtitle: "Principais conquistas e diferenciais da minha trajetória profissional.",
  achievementsCards: [
    {
      title: "5+ Anos Desenvolvendo Sistemas Escaláveis",
      subtitle:
        "Experiência em Node.js, TypeScript e PHP criando APIs REST, integrações complexas e soluções orientadas ao negócio.",
      image: require("./assets/images/nc.png"),
      imageAlt: "Backend Development",
      footerLink: []
    },
    {
      title: "Liderança Técnica e Mentoria",
      subtitle:
        "Atuação em migração de sistemas legados, definição de arquitetura, revisão de código e acompanhamento de desenvolvedores.",
      image: require("./assets/images/leadership.png"),
      imageAlt: "Tech Leadership",
      footerLink: []
    },
    {
      title: "Mestre em Ciência da Computação",
      subtitle:
        "Pesquisa em tecnologias para saúde, desenvolvimento de jogos educacionais e liderança de projetos acadêmicos multidisciplinares.",
      image: require("./assets/images/ppgcc.png"),
      imageAlt: "Master Degree",
      footerLink: []
    },
    {
      title: "Especialista em Integrações",
      subtitle:
        "Experiência com APIs RESTful, Webhooks, sistemas financeiros, automações e integrações entre plataformas corporativas.",
      image: require("./assets/images/api.png"),
      imageAlt: "API Integration",
      footerLink: []
    },
    {
      title: "BI e Observabilidade",
      subtitle:
        "Criação de dashboards financeiros e operacionais utilizando Elasticsearch, Kibana e Stack ELK para tomada de decisão estratégica.",
      image: require("./assets/images/rcosta_logo.png"),
      imageAlt: "Business Intelligence",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Currículo",
  subtitle: "Sinta-se à vontade para baixar meu currículo.",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em contato ☎️"),
  subtitle: "Quer conversar ou tirar dúvidas? Estou disponível.",
  number: "(84) 9 9915 9061",
  email_address: "rafael.pomeu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
