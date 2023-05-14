import React from "react";
import { useParams } from "react-router-dom";
import cards from "./Const";

function View_Blog() {
  const { id } = useParams();
  const card = cards[id];

  // generate random color
  const randomColor = () => {
    const colors = ["#22c55e", "#14b8a6", "#ec4899", "#3b82f6", "#77a1f2"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between flex-wrap align-items-center gap-3">
        <p className="fs-1 headline fw-semibold me-5">{card.title}</p>
        <div>
          <div className="d-flex flex-row">
            <img
              className="rounded-circle shadow-4"
              style={{ width: "50px" }}
              src={card.userAvatar}
              alt="user_img"
            />
            <div className="ms-3 d-flex flex-column">
              <span className="subline_txt">Author : {card.name}</span>
              <span className="subline_txt">Date : {card.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3 d-flex justify-content-center">
        <img
          src={card.cover}
          style={{
            maxInlineSize: 100 + "%",
            blockSize: "auto",
            aspectRatio: 2 / 1,
            objectFit: "cover",
            height: 300,
            width: 1000,
            objectPosition: "center",
            borderRadius: "20px",
          }}
          alt="..."
        />
      </div>
      <div className="my-4">
        {card.labels.map((label, index) => (
          <span
            key={index}
            className="badge text-white me-3 my-3 flex-wrap fs-6"
            style={{ backgroundColor: randomColor() }}
          >
            {label}
          </span>
        ))}
      </div>
      {card.text}
    </div>
  );
}

export default View_Blog;
