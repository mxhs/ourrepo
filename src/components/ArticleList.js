import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SavedList from "./SavedList";

function ArticleList(props) {
  const { articles, } = props;

  return (
    <div className="articlecards">
      {articles
        ? articles.map((article) => (
            <div>
              <ArticleCard
                article={article}
              />
            </div>
          ))
        : "loading.."}
    </div>
  );
}

export default ArticleList;
