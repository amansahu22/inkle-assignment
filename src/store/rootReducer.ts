import { combineReducers } from "redux";
import { mailData } from "./mailReducer";
import { tabData } from "./activetabReducer";

export default combineReducers({ mailData, tabData });
