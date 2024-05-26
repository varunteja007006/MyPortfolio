const experienceData = [
  {
    id: 2,
    jobTitle: "Software Engineer",
    company: "Invest4Edu",
    workingFrom: "Dec 2023",
    workingTill: "",
    dateOfJoining: "2023-12-18",
    dateOfResigning: "2023-12-18",
    jobDescription: [
      "Profession: Full Stack Developer - Invest4Edu Education & Financial Services Platform.",
      "Responsibilities: Developing Frontend, integrating with backend using Node JS. Building of complex & efficient UI like dashboards, charts, filters, login etc. using Material UI, Highcharts, etc.. Also occasionally working on the SSMS (SQL).",
      `Major Accomplishments: 
      Complete Revamp of the website in the span of 3 months which helped in gaining the 6K+ users in 2 months after the release. The revamp included the rewrite of class components to functional components.\n
      Increasing SEO by migrating the React App to Next JS framework to take advantage of SSR. 
      `,
    ],

    show: true,
    current: true,
  },
  {
    id: 1,
    jobTitle: "System Engineer",
    company: "Tata Consultancy Services",
    workingFrom: "May 2021",
    workingTill: "Dec 2023",
    dateOfJoining: "2021-5-27",
    jobDescription: [
      "Profession: System Engineer - HCM Platform Development.",
      "Responsibilities: Developing and supporting custom interfaces, specifically tailored to meet client requirements for a global user base of 10,000+ across four critical regions: America, APAC, EMEA, and JAPAN.",
      "Additional Info: Built custom interfaces using Recharts, React Hooks, Fetch API, supporting  JWT Authentication.",
      "Success milestone: Received a 5-star rating from customers for consistently providing timely updates and exceptional support.",
    ],
    show: true,
    hidden: false,
  },
];
export default experienceData;
