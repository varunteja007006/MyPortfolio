import {
  FaReact,
  FaLinux,
  FaWindows,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaBootstrap,
  FaPhp,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiCss3,
  SiTailwindcss,
  SiDjango,
  SiMdnwebdocs,
  SiNetlify,
  SiHeroku,
  SiRailway,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiJenkins,
  SiSonarqube,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { GiTortoise } from "react-icons/gi";

const technicalSkillsData = {
  ProgrammingLanguages: [
    { name: "React JS", icon: FaReact, show: true, hidden: false },
    { name: "Node JS", icon: FaNodeJs, show: true, hidden: false },
    { name: "Python", icon: FaPython, show: true, hidden: false },
    { name: "JavaScript", icon: SiJavascript, show: true, hidden: false },
    { name: "MongoDB", icon: SiMongodb, show: true, hidden: false },
    { name: "MySQL", icon: SiMysql, show: true, hidden: false },
    { name: "HTML", icon: FaHtml5, show: true, hidden: false },
    { name: "CSS", icon: SiCss3, show: true, hidden: false },
    { name: "Tailwind CSS", icon: SiTailwindcss, show: true, hidden: false },
    { name: "Bootstrap CSS", icon: FaBootstrap, show: true, hidden: false },
    { name: "SCSS", icon: BsFiletypeScss, show: true, hidden: false },
    { name: "PHP", icon: FaPhp, show: true, hidden: false },
  ],
  frameworks: [
    { name: "MERN Stack", icon: SiMdnwebdocs, show: true, hidden: false },
    { name: "Django Web Framework", icon: SiDjango, show: true, hidden: false },
  ],
  platforms: [
    { name: "AWS", icon: FaAws, show: true, hidden: false },
    { name: "Netlify", icon: SiNetlify, show: true, hidden: false },
    { name: "Heroku", icon: SiHeroku, show: true, hidden: false },
    { name: "Railway", icon: SiRailway, show: true, hidden: false },
  ],
  tools: [
    { name: "GitHub", icon: SiGithub, show: true, hidden: false },
    { name: "VS Code", icon: SiVisualstudiocode, show: true, hidden: false },
    { name: "Postman", icon: SiPostman, show: true, hidden: false },
    { name: "TortoiseSVN", icon: GiTortoise, show: true, hidden: false },
    { name: "Jenkins", icon: SiJenkins, show: true, hidden: false },
    { name: "SonarQube", icon: SiSonarqube, show: true, hidden: false },
  ],
  os: [
    { name: "Linux", icon: FaLinux, show: true, hidden: false },
    { name: "Windows 10", icon: FaWindows, show: true, hidden: false },
  ],
};

export default technicalSkillsData;
