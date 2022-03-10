import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import playlistReducer from "./PlaylistStore/index.js";

export const rootStore = combineReducers({
  playlist: playlistReducer,
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

export default createStore(rootStore, composedEnhancers);
