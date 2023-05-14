import { Link } from "react-router-dom";
import logo from "../../assests/image/logo.png";
import styles from "./navbar.module.css";

function Navbar_() {
  function closeNav() {
    document.querySelector(".navbar-collapse").classList.remove("show");
  }
  return (
    <header>
      <div className="container sticky-top">
        <nav
          className={`navbar navbar-custom navbar-dark navbar-expand-lg shadow-5-strong ${styles.navbar_}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand fs-5" to="./">
              <img src={logo} width="80" height="80" alt="" />
              <span className={styles.title_txt}>Rajeshkumar</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span onClick={closeNav} className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 column-gap-4 align-items-center">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.nav_link}`}
                    to="/"
                    onClick={closeNav}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.nav_link}`}
                    to="/about"
                    onClick={closeNav}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.nav_link}`}
                    to="/blog"
                    onClick={closeNav}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.nav_link}`}
                    to="/contact"
                    onClick={closeNav}
                  >
                    Contact
                  </Link>
                </li>

                <div className="d-flex flex-row gap-4">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://www.linkedin.com/in/rajeshkumar2002"
                    >
                      <span
                        style={{ color: "#0077B5", fontSize: "20px" }}
                        className="bi bi-linkedin"
                      ></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://instagram.com/mr.s.i.x_2k2"
                    >
                      <span
                        style={{ color: "#C13584", fontSize: "20px" }}
                        className="bi bi-instagram"
                      ></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="https://twitter.com/Dev_Rajeshkumar"
                    >
                      <span
                        style={{ color: "#00acee", fontSize: "20px" }}
                        className="bi bi-twitter"
                      ></span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar_;
