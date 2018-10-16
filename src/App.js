import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import QuestionsTable from "./components/QuestionTable";
import QuestionDetail from './components/QuestionDetail'
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={QuestionsTable} />
              <Route exact path="/questionDetail/:id" component={QuestionDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
