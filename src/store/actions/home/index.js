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
  let data = { title: "halo" };
  dispatch({ type: GET_DATA_HOME, payload: data });
};

export const setDataDetailHome = () => (dispatch) => {
  let data = "Data Detail";
  dispatch({ type: GET_DATA_HOME_DETAIL, payload: data });
};
