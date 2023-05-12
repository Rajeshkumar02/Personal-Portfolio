import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cards from "./Const";
import styles from "./blog.module.css";

function Card(props) {
  const Navigate = useNavigate();

  // generate random color
  const randomColor = () => {
    const colors = ["#22c55e", "#14b8a6", "#ec4899", "#3b82f6", "#77a1f2"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // create markup for text
  function createMarkup(text) {
    const element = document.createElement("span");
    element.innerHTML = text;
    return element.textContent;
  }

  return (
    <div className="col mb-4">
      <div className={`card h-100 ${styles.cus_card}`}>
        <div className={styles.image_container}>
          <img
            onClick={() => {
              Navigate(`/blog/${props.id}`);
            }}
            src={props.cover}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body">
          {props.labels.map((label, index) => (
            <span
              key={index}
              className="badge text-white me-3 my-3 flex-wrap"
              style={{ backgroundColor: randomColor() }}
            >
              {label}
            </span>
          ))}

          <div
            className="pb-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              Navigate(`/blog/${props.id}`);
            }}
          >
            <h5 className="card-title primary_txt">{props.title}</h5>
            <p className="card-text secondary_txt">
              <div>
                {props.text.length > 200
                  ? createMarkup(props.text.slice(0, 200) + " ...")
                  : createMarkup(props.text)}
              </div>
            </p>
          </div>
          <div className="d-flex flex-row align-items-center">
            <img
              src={props.userAvatar}
              className="rounded-circle shadow-4"
              style={{ width: "40px" }}
              alt="Avatar"
            />
            <div className="d-flex flex-column ms-1 flex-wrap">
              <p className="ms-3 mb-0 fs-6 primary_txt">
                {props.name}{" "}
                <span className="secondary_txt">- {props.date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  // Logic for displaying current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <p className="fs-3 headline">
        <strong>Latest articles</strong>
      </p>
      <hr />

      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            labels={card.labels}
            name={card.name}
            date={card.date}
            userAvatar={card.userAvatar}
            cover={card.cover}
            id={index}
          />
        ))}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
                style={{
                  backgroundColor: currentPage === number ? "#5d5dff" : "white",
                  color: currentPage === number ? "white" : "black"
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Blog;
