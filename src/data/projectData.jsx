import { jobtoday, jobtoday1, jobtoday2, jobtoday3 } from "../assets";
import { fit, fit1, fit2 } from "../assets";
import {
  sentiment,
  sentiment1,
  sentiment2,
  sentiment3,
  sentiment4,
} from "../assets";
import {
  sportsmanagement,
  sportsmanagement1,
  sportsmanagement2,
  sportsmanagement3,
  sportsmanagement4,
  sportsmanagement5,
  sportsmanagement6,
  sportsmanagement7,
  sportsmanagement8,
  sportsmanagement9,
} from "../assets";
import { collabs, collabs1, collabs2, collabs3, collabs4 } from "../assets";

import { budget, budget1, budget2, budget3, budget4 } from "../assets";

const projectData = [
  {
    id: 1,
    project_title: `JobToday`,
    project_subtitle: `An awesome Job manager`,
    project_badges: ["Axios", "React JS", "Redux", "Recharts", "Tailwind CSS"],
    project_description: [
      "Applying Jobs can be tiring. You want to know what is more tiring? Keeping track of those jobs. JobToday ⚡ - The Pro Job Application Manager App will help you keep track of your job applications.",
    ],
    project_github: "https://github.com/varunteja007006/JobToday-ReactJS",
    project_link: "https://jobtoday.netlify.app/",
    project_images: [jobtoday, jobtoday1, jobtoday2, jobtoday3],
    show: true,
    hidden: false,
  },
  {
    id: 2,
    project_title: `Fit App`,
    project_subtitle: ``,
    project_badges: [
      "Mongo DB",
      "Express JS",
      "Node JS",
      "React JS",
      "Bootstrap",
      "SASS",
    ],
    project_description: [
      "This application is built on the MERN Stack Framework, with JWT-based authentication for enhanced security. React useReducer hook is used for efficient state updates, while the useContext hook provides seamless user experience. These features work together to create a professional and high-quality application, delivering exceptional performance and functionality.",
    ],
    project_github: "https://github.com/varunteja007006/FitApp-ReactJS",
    project_link: "",
    project_images: [fit, fit1, fit2],
    show: true,
    hidden: false,
  },
  {
    id: 3,
    project_title: `Twitter Sentiment Analysis`,
    project_subtitle: ``,
    project_badges: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "NLTK",
      "Numpy",
      "TextBlob",
      "Tweepy",
      "Pandas",
    ],
    project_description: [
      "The app performs Sentiment Analysis on tweets retrieved through the Twitter API, utilizing Django - a powerful Python-based Web Framework - to power its functionality. The classification of tweets is performed using the Naive Bayes algorithm, allowing for accurate and effective sentiment analysis. Together, these features enable the app to deliver reliable and informative insights into the sentiment of the tweets analyzed.",
    ],
    project_github:
      "https://github.com/varunteja007006/Twitter-Sentiment-analysis-on-politicians-using-Django",
    project_link: "",
    project_images: [sentiment, sentiment1, sentiment2, sentiment3, sentiment4],
    show: true,
    hidden: false,
  },
  {
    id: 4,
    project_title: `Sports Management Website`,
    project_subtitle: ``,
    project_badges: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    project_description: [
      "This project is designed to keep track of sports events and is based on the LAMP stack. The website is built from scratch, making use of PHP and MySQL to power the backend, and plain HTML and CSS for the frontend. Additionally, Bootstrap was later implemented to enhance the design consistency. Despite being my first project, the website is effective in its goal of maintaining records and delivering an efficient user experience.",
    ],
    project_github:
      "https://github.com/varunteja007006/Sportz-Management-Website-Bootstrap",
    project_link: "",
    project_images: [
      sportsmanagement,
      sportsmanagement1,
      sportsmanagement2,
      sportsmanagement3,
      sportsmanagement4,
      sportsmanagement5,
      sportsmanagement6,
      sportsmanagement7,
      sportsmanagement8,
      sportsmanagement9,
    ],
    show: true,
    hidden: false,
  },
  {
    id: 5,
    project_title: `Collabs`,
    project_subtitle: ``,
    project_badges: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Materialize CSS",
    ],
    project_description: [
      "Collabs: Unleash your potential through collaborative synergy! Our web app combines the power of Django and Materialize CSS to create an engaging platform where students come together to share skills and discover exciting projects. Connect with like-minded individuals, showcase your talents, and embark on a journey of innovation and growth. Join Collabs and unlock endless possibilities for collaboration and personal development!",
    ],
    project_github: "https://github.com/varunteja007006/collabs_WebApp_Django",
    project_link: "#",
    project_images: [collabs, collabs1, collabs2, collabs3, collabs4],
    show: false,
    hidden: false,
  },
  {
    id: 6,
    project_title: `Budget`,
    project_subtitle: ``,
    project_badges: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQLite",
      "Bootstrap",
      "Numpy",
    ],
    project_description: [
      "Empower your finances with our Bootstrap and Django-powered web app. Seamlessly track income and expenses, while elegant cards display salary, month-end balance, and total expenses. Engage with captivating visualizations like histograms, bar graphs, and pie charts. Effortlessly analyze and manage your money with the added convenience of generating CSV files. Upgrade your financial management with our sleek and feature-rich solution.",
    ],
    project_github: "https://github.com/varunteja007006/Budget",
    project_link: "#",
    project_images: [budget, budget1, budget2, budget3, budget4],
    show: false,
    hidden: false,
  },
];

export default projectData;
