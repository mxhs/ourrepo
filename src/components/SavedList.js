import React from "react";
import { Route, Link } from "react-router-dom";
import IndividualArticle from "./IndividualArticle";

function SavedList({ list }) {
    
    console.log(list)
  return (
    <div className="saved-list">
      {list.map((article) => {
        return (
          <Link
            to={`/saved-articles/${article.id}`}
            key={article.id}
            activeClassName="saved-active"
          >
          </Link>
        );
      })}
    </div>
  );
}

export default SavedList;
