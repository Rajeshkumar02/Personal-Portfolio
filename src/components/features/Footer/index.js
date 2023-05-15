import { Link } from "react-router-dom";
import logo from "../../assests/image/logo.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={`mt-5 ${styles.primary_footer}`}>
      <div className="container">
        <hr className="my-5" />
        <div className="d-flex flex-row align-items-center justify-content-center gap-5">
          <Link
            className="nav-link"
            to="https://www.linkedin.com/in/rajeshkumar2002"
          >
            <span
              style={{ color: "#0077B5", fontSize: "20px" }}
              className="bi bi-linkedin"
            ></span>
          </Link>

          <Link className="nav-link" to="https://instagram.com/mr.s.i.x_2k2">
            <span
              style={{ color: "#C13584", fontSize: "20px" }}
              className="bi bi-instagram"
            ></span>
          </Link>

          <Link className="nav-link" to="https://twitter.com/Dev_Rajeshkumar">
            <span
              style={{ color: "#00acee", fontSize: "20px" }}
              className="bi bi-twitter"
            ></span>
          </Link>
        </div>
        <p className="fs-6 primary_txt text-center py-3" >Get in Touch !</p>
      </div>
      <div className={styles.secondary_footer}>
        <p
          className="mb-3 primary_txt text-center"
          style={{ cursor: "pointer" }}
        >
          © 2023 : Rajeshkumar S
        </p>
      </div>
    </footer>
  );
}

export default Footer;
