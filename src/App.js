import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/word-report/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar className="header-wrap">
          <Toolbar>
            <span
              style={{ fontFamily: "cursive" }}
              variant="h5"
              component="div"
            >
              Word Analysis Report
            </span>
          </Toolbar>
        </AppBar>

        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
