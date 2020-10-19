import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
    console.log(articles)
    return (
        <div className="article-list">
      {articles.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`}>
          <ArticleCard article={article} />
        </Link>
      ))}
    </div>
    
  );
}

export default ArticleList;