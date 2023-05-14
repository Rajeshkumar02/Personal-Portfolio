import developer from "../../assests/gif/developer.gif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";
import {
  java,
  javascript,
  python,
  flask,
  mongodb,
  firebase,
  html,
  css,
  react,
} from "../../assests/image/programing_language";
import ProjectCard from "./ProjectCard";

import expense_mobile from "../../assests/image/Project/Expense_Mobile.jpg";
import fakereview from "../../assests/image/Project/Fake_review.jpg";
import expense_web from "../../assests/image/Project/Expense_Web.jpg";
import traffic_sign from "../../assests/image/Project/Traffic_Sign.jpg";

function About() {
  const skills = [
    { name: "Java", image: java },
    { name: "JavaScript", image: javascript },
    { name: "Python", image: python },
    { name: "Flask", image: flask },
    { name: "Mongodb", image: mongodb },
    { name: "Firebase", image: firebase },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "React", image: react },
  ];
  const educationDetails = [
    {
      title: "B.E in Computer Science and Engineering",
      location: "KPR Institute of Engineering and Technology, Coimbatore",
      duration: "2019 - 2023",
      details: ["CGPA: 8.25"],
    },
    {
      title: "12th Tamilnadu State Board",
      location: "Ponnu Matric Higher Secondary School, Dharapuram",
      duration: "2017 - 2019",
      details: ["Percentage: 77.0%"],
    },
    {
      title: "10th Tamilnadu State Board",
      location: "Ponnu Matric Higher Secondary School, Dharapuram",
      duration: "2016 - 2017",
      details: ["Percentage: 90.2%"],
    },
  ];

  const projectDetails = [
    {
      title: "Expense Tracker Mobile",
      coverImg: expense_mobile,
      description:
        "Personal finance encompasses the financial choices and actions individuals make to manage their money effectively. A finance app simplifies this process by providing budgeting, accounting, and insightful money management features. Using a mobile application built with React Native and Firebase as the database enhances accessibility and convenience.",
      git_Link: "https://github.com/Rajeshkumar02/Expense_Tracker_Mobile",
      technologies: ["React Native", "Firebase"],
    },
    {
      title: "Fake Review Prediction",
      coverImg: fakereview,
      description:
        "Our project aimed to develop a web app for detecting fake reviews. We trained an ML model on the Amazon review dataset and collected user reviews to expand it. Using TF-IDF, we extracted meaningful features. Employing SVM for classification, we built a user-friendly React.js frontend and a Flask backend. Firebase Authentication ensured data security. Rigorous testing on both datasets enhanced prediction accuracy. Our project showcases successful ML application in fake review detection.",
      git_Link: "https://github.com/rajeshkumar-2002/Fake-review-predection",
      technologies: ["React", "Firebase"],
    },
    {
      title: "Personal Expense Tracker",
      coverImg: expense_web,
      description:
        "In simple words, personal finance entails all the financial decisions and activities that a Finance app makes your life easier by helping you to manage your finances efficiently. A personal finance app will not only help you with budgeting and accounting but also give you helpful insights about money management. Personal finance applications will ask users to add their expenses and based on their expenses wallet balance will be updated which will be visible to the user. Also, users can get an analysis of their expenditure in graphical forms. They have an option to set a limit for the amount to be used for that particular month if the limit is exceeded the user will be notified with an email alert.",
      git_Link:
        "https://github.com/Rajeshkumar02/Personal_Expense_Tracker_Application",
      technologies: ["Flask", "DB2"],
    },
    ,
    {
      title: "Traffic Sign Detection",
      coverImg: traffic_sign,
      description:
        "This project aims to educate users about road signals using a mobile application. Users can capture a road sign, which is then sent to the Flask backend. The trained model predicts the sign, and the corresponding information is sent back to the mobile app. The app displays relevant videos based on the sign, providing educational content. React Native is used for the mobile app, Flask for the backend, and MongoDB for authentication.",
      git_Link: "https://github.com/Balasubramaniam077/traffic_image",
      technologies: ["React Native", "Flask", "MongoDB"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectPerPage] = useState(9);

  // Logic for displaying current Project
  const indexOfLastProject = currentPage * ProjectPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectPerPage;
  const currentProjects = projectDetails.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projectDetails.length / ProjectPerPage); i++) {
    pageNumbers.push(i);
  }

  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="primary_txt fs-1 mt-2">
        <strong>About Me</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className="col-md-6 d-flex flex-row justify-content-end order-md-last">
          <div className="col-lg-8 col-xl-9">
            <img
              src={developer}
              style={{ borderRadius: 20 }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-start order-md-first">
          <div>
            <p className={`secondary_txt fs-5 pt-2 ${styles.justify_text}`}>
              Hello, I'm RajeshKumar S, a web developer passionate about
              creating exceptional digital experiences. With a strong foundation
              in web technologies, I specialize in React.js, React Native, and
              Flask.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              My journey as a developer began with my fascination for building
              interactive and intuitive interfaces. I have honed my skills in
              frontend development using React.js, a powerful JavaScript library
              for building user interfaces. I enjoy crafting reusable
              components, managing application state, and ensuring optimal
              performance.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              In addition to frontend development, I have experience in mobile
              app development using React Native. This allows me to create
              cross-platform applications that run seamlessly on both iOS and
              Android devices. I'm skilled in leveraging device features and
              implementing intuitive user experiences.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              I believe in continuous learning and staying up to date with the
              latest industry trends. This enables me to leverage the most
              effective tools and techniques to deliver innovative and
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Professional Skills</strong>
      </p>
      <div className="row ms-3 justify-content-around row-gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-3 col-sm-4 col-6">
            <div className={`${styles.skill_box}`}>
              <img src={skill.image} alt={skill.name} />
              <div className={`${styles.tooltip}`}>
                <span>{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Education Detials</strong>
      </p>
      <div className={styles.timeline}>
        {educationDetails.map((education, index) => (
          <div key={index} className={styles.timeline_item}>
            <div className={styles.timeline_content}>
              <h4 className="fs-3 primary_txt">{education.title}</h4>
              <p className="primary_txt">{education.location}</p>
              <p className="secondary_txt">{education.duration}</p>
              <ul>
                {education.details.map((detail, idx) => (
                  <li className="secondary_txt" key={idx}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Projects</strong>
      </p>
      <div className="w-100">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {currentProjects.map((project, index) => (
            <ProjectCard project={project} />
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(number)}
                  style={{
                    backgroundColor:
                      currentPage === number ? "#5d5dff" : "white",
                    color: currentPage === number ? "white" : "black",
                  }}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default About;
