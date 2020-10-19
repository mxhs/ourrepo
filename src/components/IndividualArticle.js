import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function IndividualArticle() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) =>
        console.log("ERROR: Individual article get:", err.response)
      );
  }, []);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <h3>Author: {article.author}</h3>
      <div className="image">img??</div>
      <div className="summary">
        <p>Summary: {article.summary}</p>
      </div>
      <div className="category">
        <p>Category: {article.category}</p>
      </div>
      <div className="rank">
        <p>Rank: {article.rank}</p>
      </div>
    </div>
  );
}
