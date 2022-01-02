import {
  GET_DATA_HOME,
  GET_DATA_HOME_DETAIL,
  GET_DATA_HOME_LOADING,
  GET_DATA_HOME_ERRORMESSAGE,
} from "./types";

export const setLoadingHome = () => (dispatch) => {
  let data = true;
  dispatch({ type: GET_DATA_HOME_LOADING, payload: data });
};

export const setErrorHome = () => (dispatch) => {
  let data = "Salah";
  dispatch({ type: GET_DATA_HOME_ERRORMESSAGE, payload: data });
};

export const getDataHome = () => (dispatch) => {
  dispatch(setLoadingHome(true));
  fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response) => response.json())
    .then((json) => {
      let result = json.map((el) => {
        el["url"] = "http://placeimg.com/600/400/nightlife";
        el["ads"] = "ads ya";
        el["likes"] = 30;
        return el;
      });
      dispatch({ type: GET_DATA_HOME, payload: result });
      dispatch(setLoadingHome(false));
    });
};

export const setDataDetailHome = () => (dispatch) => {
  let data = "Data Detail";
  dispatch({ type: GET_DATA_HOME_DETAIL, payload: data });
};
