import { GET_WORD_ANALYSIS } from "./actions";


/**
 * Reducer function to get the word analysis report from backend
 * 
 */
export function wordAnalysisReducer(state, action) {
  if (!state) state = {}
  const { type, payload } = action
  if (type == GET_WORD_ANALYSIS) {
    return { wordAnalysisReport: payload }
  }
  else {
    return state
  }
}

