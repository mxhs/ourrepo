import React from "react";

const ArticleCard = (props) => {
    const {title, author, image, summary, category, rank} = props.article
  console.log(props);

  return (
    <div>
      {props.article ? (
        <div className="article-card">
          <h1>{title}</h1>
          
          <h3>Author: {author}</h3>
          <img className="image" src={image}></img>
          <div className="summary">
            <p>Summary: {summary}</p>
          </div>
          <div className="category">
            <p>Category: {category}</p>
          </div>
          <div className="rank">
            <p>Rank: {rank}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticleCard;
