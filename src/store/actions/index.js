import axios from "axios";
import { axiosWithAuth } from './utils/axiosWithAuth';
export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const RANK_ARTICLE = "RANK_ARTICLE";
export const SAVE_ARTICLE = "SAVE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

const baseUrl = "https://pintereach-backend-ajg.herokuapp.com/";

export const fetchArticles = () => (dispatch) => {
  axios
    .get(`${baseUrl}articles`)
    .then((res) => {
      dispatch({ type: FETCH_ARTICLES_START, payload: res.data.data });
    })
    .finally(() => {});
};

export const rankArticle = (id, obj) => (dispatch) => {
  axiosWithAuth()
    .put(`${baseUrl}articles/1`, obj)
    .then((res) => {
      dispatch({ type: RANK_ARTICLE, payload: res.data.updatedList[id - 1] });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteArticle = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`${baseUrl}saved_articles/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ARTICLE, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const saveArticle = (id) => (dispatch) => {
  axiosWithAuth()
  .get(`${baseUrl}articles/${id}`).then((res) => {
      dispatch({ type: SAVE_ARTICLE, payload: res.data.data });
  });
};
