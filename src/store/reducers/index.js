import { combineReducers } from "redux";
import { navList } from "./navList";
import { shuffleIndex } from "./shuffle";
import { songInfo } from "./songInfo";
import { popup } from "./popup";
import { repeatIndex } from "./repeat";
import { playing } from "./playing";
import { songList } from "./songList";
import { songIndex } from "./songIndex";
import { playList } from './playList';
import { mkList } from "./mkList";

const rootReducer = combineReducers({ mkList, songList, songIndex, shuffleIndex, songInfo, popup, repeatIndex, navList, playing, playList});

export default rootReducer;