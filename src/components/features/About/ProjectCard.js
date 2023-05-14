import { Link } from "react-router-dom";
import styles from "./about.module.css";
import { useState } from "react";

function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const displaydescription =
    project.description.length > 200 && !showMore
      ? project.description.slice(0, 200) + "..."
      : project.description;

  const showMoreText = showMore ? "Show Less" : "Show More";

  // generate random color
  const randomColor = () => {
    const colors = ["#22c55e", "#14b8a6", "#ec4899", "#3b82f6", "#77a1f2"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="col mb-4">
      <div className={`card ${styles.custum_card}`}>
        {!showMore && (
          <div className={styles.image_container}>
            <img
              src={project.coverImg}
              className={`card-img-top ${styles.project_img}`}
              alt={project.title}
            />
          </div>
        )}
        <div className="card-body">
          {project.technologies.map((label, index) => (
            <span
              key={index}
              className="badge text-white me-3 my-3 flex-wrap"
              style={{ backgroundColor: randomColor() }}
            >
              {label}
            </span>
          ))}
          <div className="pb-3">
            <h5 className="card-title primary_txt">{project.title}</h5>
            <p className="card-text secondary_txt">
              <div style={{ textIndent: "1rem" }} className={styles.justify_txt}>
                {project.description.length > 200 ? (
                  <>
                    {displaydescription}
                    <span
                      className="primary_txt"
                      style={{ paddingLeft: "10px", cursor: "pointer" }}
                      onClick={handleShowMore}
                    >
                      {showMoreText}!
                    </span>
                  </>
                ) : (
                  project.description
                )}
              </div>
            </p>
          </div>

          {!showMore && (
            <div className="d-flex flex-row align-items-center">
              <Link className={styles.link} to={project.git_Link}>
                Github Link!
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
