import coder_gif from "../../assests/gif/Coder_gif.gif";
import Online_gif from "../../assests/gif/online.gif";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import programing from "../../assests/image/Programing.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="primary_txt fs-1 mt-2">
        <strong>Welcome to My Portfolio!</strong>
      </p>
      <p className={`secondary_txt fs-5 py-4 ${styles.justify_text}`}>
        Hello, I'm RajeshKumar S, a passionate web developer with expertise in
        React.js, React Native, and Flask. I specialize in creating dynamic and
        user-friendly web applications that deliver seamless experiences. With a
        focus on clean code and efficient problem-solving, I strive to develop
        high-quality solutions that meet client requirements.
      </p>
      <div className="text-center">
        <img
          src={programing}
          style={{
            maxInlineSize: 100 + "%",
            blockSize: "auto",
            aspectRatio: 2 / 1,
            objectFit: "cover",
            height: 400,
            width: 1000,
            objectPosition: "center",
            borderRadius: "20px",
          }}
          alt="coder"
        />
      </div>
      <hr className="my-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Innovative Web Developer</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className="col-md-6 d-flex flex-row justify-content-end order-md-last">
          <div className="col-lg-8 col-xl-9">
            <img
              src={coder_gif}
              style={{ borderRadius: 20 }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-start order-md-first">
          <p className={`fs-5 secondary_txt w-100 ${styles.justify_text}`}>
            As a web developer, I have worked on various projects using
            cutting-edge technologies and frameworks. I have experience in
            frontend development with React.js and React Native, as well as
            backend development with Flask. I enjoy building responsive
            interfaces, integrating APIs, and solving complex challenges to
            create innovative solutions.
          </p>
        </div>
      </div>

      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Explore My Portfolio</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className={"col-md-6"}>
          <div className="d-flex flex-row justify-content-center col-lg-8 col-xl-9">
            <img
              src={Online_gif}
              style={{ borderRadius: 20, transform: "scaleX(-1)" }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div
          style={{ minWidth: 300 }}
          className={"col-md-6 d-flex flex-row justify-content-center"}
        >
          <span className="w-100">
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              Feel free to explore my portfolio, where you will discover
              comprehensive information about my skills, projects, education,
              work experience, and contact details. In my portfolio, I have
              showcased a wide range of skills, including proficiency in
              React.js, React Native, and Flask. You will find examples of my
              previous projects, demonstrating my ability to deliver
              high-quality solutions.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              Additionally, I have provided details about my educational
              background, highlighting the relevant courses, certifications, and
              degrees that have contributed to my expertise in web development.
              My work experience section outlines the projects I have worked on,
              showcasing my ability to collaborate effectively within teams and
              deliver successful outcomes.
            </p>
          </span>
        </div>
      </div>
      <hr className="my-4 " />
      <p className="primary_txt fs-1 my-4 ">
        <strong>Get in Touch</strong>
      </p>
      <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
        If you have any questions or would like to get in touch, please feel
        free to contact me through the provided contact details. I am always
        open to answering any inquiries you may have. Your feedback and
        inquiries are valuable to me, and I will make sure to respond promptly.
      </p>
      <div className="d-flex justify-content-center ">
        <div className="col-12 col-md-7 col-lg-6 col-xlg-3">
          <div
            className={`mt-4 about d-flex justify-content-center ${styles.contact_btn_border}`}
          >
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className={`${styles.contact_btn}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
