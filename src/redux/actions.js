import axios from "axios";
export const axiosInstance = axios.create();

export const _URL_WORD_ANALYSIS = "http://localhost:8080/word/get";
export const GET_WORD_ANALYSIS = "GET_WORD_ANALYSIS";


/**
 * Action to send the score card to the backend
 * 
 */
export const getWordReport = (payload) => {
  return async (dispatch) => {
    await axiosInstance.post(_URL_WORD_ANALYSIS, payload, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      console.log('Authenticated');
      dispatch({
        type: GET_WORD_ANALYSIS,
        payload: response.data,
      });

    }).catch(function (error) {
      dispatch({
        type: GET_WORD_ANALYSIS,
        payload: error,
      });
    });


  };
};
