import ArticleCards from "../ArticleCards/ArticleCards";

import "./ArticleSidesContainer.css";

function ArticleSidesContainer() {
  return (
    <div className="sideArticleContainer">
      <h4>Trending Articles</h4>
      <ArticleCards />
      <ArticleCards />
      <ArticleCards />
      <ArticleCards />
    </div>
  );
}

export default ArticleSidesContainer;
