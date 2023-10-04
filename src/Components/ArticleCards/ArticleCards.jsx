import artImage from "../../assets/articlesImage.jpg";

import "./ArticleCard.css";

function ArticleCards() {
  return (
    <div className="articleCardContainer">
      <div className="imgContainer">
        <img src={artImage} alt="article image" />
      </div>
      <div className="textAndSubject">
        <h1>Tactical Engagement</h1>
        <p>by const. George Sam</p>
      </div>
    </div>
  );
}

export default ArticleCards;
