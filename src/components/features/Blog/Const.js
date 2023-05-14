import Fake_review_detection from "./Fake_Review";
import cover from "./Fake_Review/Fake_review.jpg";
import raj from "../../assests/image/Raj_S.png";

const cards = [
  {
    cover: cover,
    title: "Fake Review Detection using Machine Learning",
    text: <Fake_review_detection />,
    labels: ["React Js", "ML"],
    name: "Rajeshkumar S",
    date: "24/04/2022",
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
    userAvatar: raj,
  },
];

export default cards;
