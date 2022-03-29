import { combineReducers } from "redux";
import { likeReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducers = combineReducers({
    likeReducer, inputReducer, commentsReducer, appReducer
})