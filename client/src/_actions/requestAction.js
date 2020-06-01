import axios from "axios";
import { setAlert } from "./alertAction";
import * as types from "./types";

// Get current request
export const getCurrentRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/request/${id}`);

    dispatch({
      type: types.GET_REQUEST,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all requests
export const getRequests = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/request");
    dispatch({
      type: types.GET_REQUESTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.REQUEST_ERROR,
      payload: { status: err.response },
    });
  }
};

// Add request
export const addRequest = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/request", formData);
    dispatch({
      type: types.ADD_REQUEST,
      payload: res.data,
    });

    dispatch(setAlert("Request Sent Successfully!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit request
export const editRequest = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.patch(`/api/request/${id}`, formData, config);

    dispatch({
      type: types.GET_REQUEST,
      payload: res.data,
    });

    dispatch(setAlert("Request Updated", "success"));

    history.push("/requests");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// update responded
export const updateResponded = (responded, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const formData = {
      responded: responded,
    };

    const res = await axios.patch(`/api/request/${id}`, formData, config);

    dispatch({
      type: types.GET_REQUEST,
      payload: res.data,
    });

    dispatch(setAlert("Request Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete request
export const deleteRequest = (id) => async (dispatch) => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/request/${id}`);
      dispatch({
        type: types.DELETE_REQUEST,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: types.REQUEST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

//Set Current request
export const setCurrentRequest = (request) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_REQUEST,
    payload: request,
  });
};

// Clear request
export const clearRequest = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_REQUEST });
};

//Filter request
export const filterrequest = (text) => async (dispatch) => {
  dispatch({ type: types.FILTER_REQUEST, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_FILTER });
};
