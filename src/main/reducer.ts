import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import zipcodeReducer from "../widgets/zipsearch/reducer";

export default combineReducers({
  routing,
  zipcodeReducer
});
