import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ArticleList({ articles, addToSavedList }) {
  const history = useHistory();

  const saveArticle = (article) => {
    addToSavedList(article);
    history.push(`/saved-articles`);
    console.log(article)
  };

  console.log(articles);
  return (
    <div className="article-list">
      {articles
        ? articles.map((article) => (
            <div>
              <Link key={article.id} to={`/articles/${article.id}`}>
                <ArticleCard article={article} />
              </Link>
              <div className="save-btn"  onClick={saveArticle}>
                Save
              </div>
            </div>
          ))
        : "loading.."}
    </div>
  );
}

export default ArticleList;
