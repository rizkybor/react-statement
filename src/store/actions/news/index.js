import {
  GET_DATA_NEWS,
  GET_DATA_NEWS_DETAIL,
  GET_DATA_NEWS_LOADING,
  GET_DATA_NEWS_ERRORMESSAGE,
} from "./types";

export const setLoadingNews = (data) => (dispatch) => {
  let data = true;
  dispatch({ type: GET_DATA_NEWS_LOADING, payload: data });
};

export const setErrorNews = () => (dispatch) => {
  let data = "Salah";
  dispatch({ type: GET_DATA_NEWS_ERRORMESSAGE, payload: data });
};

export const getDataNews = () => (dispatch) => {
  dispatch(setLoadingNews(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response) => response.json())
    .then((json) => {
      let result = json.map((el) => {
        el["url"] = "http://placeimg.com/600/400/nightlife";
        return el;
      });
      dispatch({ type: GET_DATA_NEWS, payload: result });
      dispatch(setLoadingNews(false));
    });
};

export const setDataDetailNews = (id) => (dispatch) => {
  dispatch(setLoadingNews(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
      let url = { url: "http://placeimg.com/600/400/nightlife" };
      let result = {
        ...json,
        ...url,
      };
      dispatch({ type: GET_DATA_NEWS_DETAIL, payload: result });
      dispatch(setLoadingNews(false));
    });
};
