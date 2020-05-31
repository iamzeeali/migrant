import * as types from "../_actions/types";

const initialState = {
  response: null,
  responses: [],
  error: {},
  filtered: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_RESPONSE:
      return {
        ...state,
        response: payload.data,
        loading: false,
      };
    case types.GET_RESPONSES:
      return {
        ...state,
        responses: payload.data.data,
        loading: false,
      };
    case types.ADD_RESPONSE:
      return {
        ...state,
        response: payload,
        loading: false,
      };
    case types.SET_CURRENT_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };
    case types.CLEAR_RESPONSE:
      return {
        ...state,
        response: null,
        loading: false,
      };

    // case types.FILTER_RESPONSE:
    //   return {
    //     ...state,
    //     filtered: state.responses.filter((req) => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return req.name.match(regex);
    //     }),
    //   };
    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case types.DELETE_RESPONSE:
      return {
        ...state,
        responses: state.responses.filter(
          (response) => response._id !== action.payload
        ),
        loading: false,
      };
    case types.RESPONSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
