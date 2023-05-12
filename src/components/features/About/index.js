import developer from "../../assests/gif/developer.gif";
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
  react
} from "../../assests/image/programing_language";

function About() {
  const skills = [
    { name: "java", image: java },
    { name: "javascript", image: javascript },
    { name: "python", image: python },
    { name: "flask", image: flask },
    { name: "mongodb", image: mongodb },
    { name: "firebase", image: firebase },
    { name: "html", image: html },
    { name: "css", image: css },
    { name: "react", image: react }
  ];
  const educationDetails = [
    {
      title: "B.E in Computer Science and Engineering",
      location: "KPR Institute of Engineering and Technology, Coimbatore",
      duration: "2019 - 2023",
      details: ["CGPA: 8.25"]
    },
    {
      title: "12th Tamilnadu State Board",
      location: "Ponnu Matric Higher Secondary School, Dharapuram",
      duration: "2017 - 2019",
      details: ["Percentage: 77.0%"]
    },
    {
      title: "10th Tamilnadu State Board",
      location: "Ponnu Matric Higher Secondary School, Dharapuram",
      duration: "2016 - 2017",
      details: ["Percentage: 90.2%"]
    }
  ];
  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="primary_txt fs-1 mt-2">
        <strong>About Me</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div
          className={
            "col-md-6 d-flex flex-row justify-content-center fade-right"
          }
        >
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
        <div className={"col-md-6 fade-left"}>
          <div className="d-flex flex-row justify-content-center col-lg-8 col-xl-9">
            <img
              src={developer}
              style={{ borderRadius: 20 }}
              alt="coder"
              className="img-fluid"
            />
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
    </div>
  );
}

export default About;
