import {Zipcodes, Zipcode, IState} from "./model";

const constant = require("./constants");

const initialState: IState = {
  addresses: [],
  fetchZipcodeErrorMessage: "",
  searchHistory: []
};

const zipcodeReducer = (state = initialState, action: any): IState => {
  switch(action.type) {
    case constant.FETCH_ZIPCODE_SUCCESS:
      return Object.assign({}, state, {
        addresses: action.addresses,
        fetchZipcodeErrorMessage: ""
      });
      // return {
      //   ...state,
      //   addresses: action.addresses,
      //   fetchZipcodeErrorMessage: ""
      // };
    case constant.FETCH_ZIPCODE_FAILURE:
      return Object.assign({}, state, {
        fetchZipcodeErrorMessage: action.message
      });
      // return {
      //   ...state,
      //   fetchZipcodeErrorMessage: action.message
      // };
    case constant.UPDATE_SEARCH_HISTORY:
      return Object.assign({}, state, {
        searchHistory: [
          ...state.searchHistory,
          state.addresses[action.index]
        ],
        addresses: []
      });
      // return {
      //   ...state,
      //   searchHistory: [
      //     ...state.searchHistory,
      //     state.addresses[action.index]
      //   ],
      //   addresses: []
      // };
    default:
      return state;
  }
};

export default zipcodeReducer;
