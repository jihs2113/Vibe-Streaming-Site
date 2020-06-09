import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import Main from "./Pages/Main/Main";
import Chart from "./Pages/Chart/Chart";
import IsModal from "./Pages/Chart/IsModal";
import MypageMusics from "./Pages/Mypage/MypageMusics";
import MypageArtists from "./Pages/Mypage/MypageArtists";
import MypageAlbums from "./Pages/Mypage/MypageAlbums";
import MypagePlaylists from "./Pages/Mypage/MypagePlaylists";
import Player from "./Pages/Player/Player"; // jintae - 첫 번째 character 대문자로 수정
import Pidenav from "./Components/SideNav/SideNav"; // jintae - 첫 번째 character 대문자로 수정
import TopChart from "./Pages/Chart/TopChart";

class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Chart" component={Chart} />
          <Route exact path="/topChart" component={TopChart} />
          <Route exact path="/MyPageMusics" component={MypageMusics} />
          <Route exact path="/MypageArtists" component={MypageArtists} />
          <Route exact path="/MypageAlbums" component={MypageAlbums} />
          <Route exact path="/MypagePlaylists" component={MypagePlaylists} />
          <Route exact path="/player" component={Player} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
          <Route exact path="/sidenav" component={Pidenav} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
          <Route exact path="/isModal" component={IsModal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
