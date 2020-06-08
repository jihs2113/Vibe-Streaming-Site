import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import Main from "./Pages/Main/Main";
import Chart from "./Pages/Chart/Chart";
import Mypage from "./Pages/Mypage/Mypage";
import player from "./Pages/Player/Player";

class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Chart" component={Chart} />
          <Route exact path="/MyPage" component={Mypage} />
          <Route exact path="/player" component={player} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
