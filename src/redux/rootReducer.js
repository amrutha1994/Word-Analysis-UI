import { combineReducers } from "redux";
import { wordAnalysisReducer } from "./reducer";

/**
 * Root Reducer which combines all the reducers used
 * 
 */
const rootReducer = combineReducers({
   wordAnalysisReducer

});

export default rootReducer;
