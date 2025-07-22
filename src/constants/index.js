import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 'I design, build, and deploy intelligent applications that solve real-world problems. From Generative AI workflows with LLMs and RAG pipelines to computer vision systems and end-to-end ML deployments on AWS, I craft solutions that drive impact. Currently enhancing AI capabilities at Interglade, with a focus on prompt engineering, agentic AI frameworks, and production-grade deployments.';

export const ABOUT_TEXT = 'I’m Utkarsh Deshmane, an AI Engineer passionate about building intelligent, scalable solutions that make a real-world impact. Currently, I work at Interglade Solutions, where I design and deploy AI/ML applications – from creating robust prompt frameworks for LLMs to developing agentic AI workflows and deploying models on AWS. My expertise spans Generative AI, RAG pipelines, computer vision, and end-to-end ML pipelines. I love working on projects that blend engineering with creativity, like my multi-language Talking AI-Baby, smart billing systems, and real-time object detection models. I’m also deeply interested in prompt engineering, LangChain, and building AI agents that extend human capability. Beyond work, I continuously build side projects – from face detection apps to stock price forecasting and automated price trackers – to sharpen my skills and explore emerging technologies. I believe AI is not just about algorithms but about solving meaningful problems efficiently and ethically. I’m always eager to collaborate, learn, and build products that create value at scale.'
export const EXPERIENCES = [
  {
    year: "Mar 2025 – Present",
    role: "AI Engineer",
    company: "Interglade Solutions Pvt Ltd, Pune",
    description: `Developed a novel prompt framework with chain-of-thought prompting, improving LLM output accuracy by 15%.
                  Fine-tuned ML models and deployed them on AWS EC2 and Lambda for production workflows.
                  Engineered REST APIs and Dockerized apps for scalable cloud deployment.`,
    technologies: ["Python", "FastAPI", "AWS EC2", "AWS Lambda", "Docker", "LangChain", "Gemini AI", "Hugging Face", "WeasyPrint", "Num2Words", "Tailwind CSS"],
  },
  {
    year: "Aug 2024 – Feb 2025",
    role: "AI/ML Intern",
    company: "Cravita Technologies, Pune",
    description: `Automated ETL workflows and data visualizations using Power BI.
                  Wrote complex, optimized SQL queries for analytics pipelines.
                  Implemented end-to-end ML workflows including data preprocessing, model training, evaluation, and deployment.`,
    technologies: ["Python", "Power BI", "SQL", "Pandas", "Scikit-Learn"],
  },
  {
    year: "Mar 2022 – Aug 2022",
    role: "Data Science Intern",
    company: "Automation AI Infosystem Pvt Ltd, Pune",
    description: `Developed a real-time animal detection model using YOLOv5, achieving 92% accuracy and reducing false alarms by 60%.
                  Conducted data cleaning, preprocessing, and model development for deployment-ready solutions.`,
    technologies: ["Python", "YOLOv5", "OpenCV", "Pandas"],
  },
];

export const PROJECTS = [
  {
    title: "Dwell well",
    image: project1,
    description:
      "An ML based web portal for detecting and reporting anomalies of houses constructed under Pradhan Mantri Awaas Yojana - Gramin.",
    technologies: ["Python", "Streamlit", "VGG 16"],
    link: "https://final-year-reportgit-jfndezg7bwcjuncetv8mrq.streamlit.app/"
  },
  {
    title: "Enquiry & Admission Management Software",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://prathamesh1417.github.io/Sevysis-Development/index.html"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "tailwindCss", "React", "Framermotion"],
    link: "#"
  },
  {
    title: "Sevysis Website",
    image: project4,
    description:
      "A Company Website website Company projects, skills, and contact information." ,
    technologies: ["HTML", "CSS", "Javacript", "Bootstrap"],
    link: "https://prathamesh1417.github.io/Sevysis_Practice/index2.html#"
  },
];

export const CONTACT = {
  address: "C-5 PranayRaj Plaza Gokul-nagar,Dhanori,Pune-411015 ",
  phoneNo: "+91-7972925223 ",
  email: "deshmaneuttu311@gmail.com",
};
