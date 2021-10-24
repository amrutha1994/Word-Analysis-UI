import { Button, Grid, Paper } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWordReport } from "../../redux/actions";

/**
 * Home component for getting word analysis
 */
const Home = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const wordAnalysisReport = useSelector((state) => state.wordAnalysisReducer.wordAnalysisReport)


  /**
   * On change method for description
   */
  const handleOnChangeText = (value) => {
    setText((value));
  };

  /**
   * On change method for search word
   */
  const handleOnChangeWord = (value) => {
    setWord((value));
  };

  /**
   * Dispatch action to get word analysis report from server
   */
  const getWordAnalysisReportFromServer = () => {
    const requestBody = {
      inputDescription: text,
      searchString: word
    }
    dispatch(getWordReport(requestBody))
  }

   /**
   * Method to clear text fields
   */
  const clearData = () => {
    setText("")
    setWord("")
  }

  return (
    <>
      <Grid className="report-container" container spacing={1}>
        <Grid item>
          <TextField
            onChange={(e) => handleOnChangeText(e.target.value)}
            className="report-field"
            variant="filled"
            label="Enter the text description"
            type="text"
            value={text}
          />
        </Grid>
        <Grid item>
          <TextField
            onChange={(e) => handleOnChangeWord(e.target.value)}
            className="report-field"
            variant="filled"
            label="Enter the word to be searched"
            type="text"
            value={word}
          />
        </Grid>
        <Grid item className="report-home">
          <Button
            className="go-btn"
            variant="contained"
            onClick={() => { getWordAnalysisReportFromServer() }}
            endIcon={<SendIcon />}
          >
            Go
          </Button>
          <Button
            className="go-btn"
            variant="contained"
            onClick={() => { clearData() }}
            endIcon={<SendIcon />}
          >
            Clear
          </Button>
        </Grid>

      </Grid>
      <Grid className="report-container" container spacing={1}>
        {
          wordAnalysisReport && Object.keys(wordAnalysisReport).length > 0 &&
          <Grid item className="report">
            <>
              <h2>Report</h2>
              <div><span>Frequency : </span><span> {wordAnalysisReport.frequency}</span> <br />
              </div>
              <div><span>Similar Words :</span>
                {wordAnalysisReport.similarWords
                  ? wordAnalysisReport.similarWords.map(element => {
                    return <div>  {element} </div >
                  })
                  :
                  <div>No matching words</div>
                }
              </div>
            </>
          </Grid>
        }
      </Grid>
    </>
  );
};

export default Home;
