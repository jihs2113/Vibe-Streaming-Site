import { combineReducers } from "redux";
import { navList } from "./navList";
import { shuffleIndex } from "./shuffle";
import { songInfo } from "./songInfo";
import { popup } from "./popup";
import { repeatIndex } from "./repeat";

const rootReducer = combineReducers({ shuffleIndex, songInfo, popup, repeatIndex, navList});
export default rootReducer;