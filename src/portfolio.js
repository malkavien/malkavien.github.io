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
    "Desenvolvedor Full Stack focado em back-end, com paixão por automações, integrações financeiras (PIX, NF-e, boletos) e soluções robustas com Node.js, TypeScript e ferramentas modernas de desenvolvimento. 🚀"
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
  subTitle: "DESENVOLVEDOR FULL STACK APAIXONADO POR BACK-END E AUTOMAÇÕES",
  skills: [
  emoji("⚡ Desenvolvimento de APIs RESTful com Node.js + Express + TypeScript"),
  emoji("⚡ Integrações com APIs de pagamento (PIX, boletos) e fiscais (NF-e)"),
  emoji("⚡ Automatizações com Webhooks"),
  emoji("⚡ Criação de front-ends com React e integração com backend"),
  emoji("⚡ Criação de app em React Native com geolocalização para controle de ponto em estágios médicos"),
  emoji("⚡ Desenvolvimento de BI financeiro e de faturamento com a stack ELK (Elasticsearch, Logstash, Kibana)")
],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "React Native", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" }
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programação",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Desenvolvedor Fullstack Pleno",
      company: "Linkdesign",
      companylogo: require("./assets/images/ld.png"),
      date: "2021 – Atualmente",
      desc: "Desenvolvimento de sistema escolar."
    },
    {
      role: "Desenvolvedor Backend Pleno",
      company: "Novacode",
      companylogo: require("./assets/images/nc.png"),
      date: "2021 – 2025",
      desc: "Desenvolvimento de SaaS com foco em automações financeiras, emissão de NF-e, integração PIX e consumo de APIs externas."
    },
    {
      role: "Analista de Dados",
      company: "RCosta",
      companylogo: require("./assets/images/rcosta_logo.png"),
      date: "2019 – 2021",
      desc: "Análise de dados e criação de dashboards (Kibana) para decisão estratégica de Postos de gasolina"
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
  title: emoji("Certificações 🏆"),
  subtitle: "Cursos e certificados relevantes para minha carreira.",
  achievementsCards: [
    {
      title: "Node.js: API REST com Express",
      subtitle: "Curso completo sobre criação de APIs com autenticação JWT e padrões de arquitetura REST.",
      image: require("./assets/images/alura.png"),
      imageAlt: "Node.js Logo",
      footerLink: [{ name: "Certificado", url: "https://cursos.alura.com.br" }]
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
