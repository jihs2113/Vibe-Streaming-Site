import { combineReducers } from "redux";
import { navList } from "./navList";
import { shuffleIndex } from "./shuffle";
import { songInfo } from "./songInfo";
import { popup } from "./popup";
import { repeatIndex } from "./repeat";
import { playing } from "./playing";

const rootReducer = combineReducers({ shuffleIndex, songInfo, popup, repeatIndex, navList, playing});
export default rootReducer;