import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current Response
export const getCurrentResponse = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/response/${id}`);

    dispatch({
      type: types.GET_RESPONSE,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.RESPONSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all Response
export const getResponses = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/response");
    dispatch({
      type: types.GET_RESPONSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.RESPONSE_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add Response
export const addResponse = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/response", formData);
    dispatch({
      type: types.ADD_RESPONSE,
      payload: res.data,
    });

    dispatch(setAlert("Response added Successfully!", "success"));
    history.push("/responses");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.RESPONSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit Response
export const editResponse = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(`/api/response/${id}`, formData, config);

    dispatch({
      type: types.GET_RESPONSE,
      payload: res.data,
    });

    dispatch(setAlert("Response Updated", "success"));

    history.push("/responses");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.RESPONSE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Response
export const deleteResponse = (id) => async (dispatch) => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/response/${id}`);
      dispatch({
        type: types.DELETE_RESPONSE,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: types.RESPONSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

//Set Current Response
export const setCurrentResponse = (response) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_RESPONSE,
    payload: response,
  });
};

// Clear Response
export const clearResponse = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_RESPONSE });
};

//Filter Response
export const filterResponse = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_RESPONSE, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
