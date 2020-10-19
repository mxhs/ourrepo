import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function Article({ addToSavedList }) {
  const [article, setArticle] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchArticle = (id) => {
    axios
      .get(`https://pintereach-backend-ajg.herokuapp.com/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log("ERROR: fetchArticle", err.response));
  };

  const saveArticle = () => {
    addToSavedList(article);
  };

  const editArticle = () => {
    history.push(`/update-article/${params.id}`);
  };

  useEffect(() => {
      fetchArticle(params.id)
  }, [params.id] );

  return (
    <div className="save-wraper">
      {/* <ArticleCard article={article} /> */}
      <div className="save-btn" onClick={saveArticle}>
        Save
      </div>
      <div className="edit-btn" onClick={editArticle}>
        Edit
      </div>
    </div>
  );
}

export default Article;
