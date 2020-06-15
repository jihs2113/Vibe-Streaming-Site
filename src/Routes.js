import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import Main from "./Pages/Main/Main";
import Chart from "./Pages/Chart/Chart";
import MypageMusics from "./Pages/Mypage/Music/MypageMusics";
import MypageArtists from "./Pages/Mypage/Artist/MypageArtists";
import MypageAlbums from "./Pages/Mypage/Album/MypageAlbums";
import MypagePlaylists from "./Pages/Mypage/Playlist/MypagePlaylists";
import Player from "./Pages/Player/Player"; // jintae - 첫 번째 character 대문자로 수정
import Pidenav from "./Components/SideNav/SideNav"; // jintae - 첫 번째 character 대문자로 수정
import MusicDetail from "./Pages/Detail/Music/MusicDetail";
import Layout from "./Components/Layout/Layout";
import TopChart from "./Pages/Chart/TopChart";
import MainChart from "./Pages/Chart/MainChart";


class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Chart" component={Chart} />
            <Route exact path="/topChart" component={TopChart} />
            <Route exact path="/MainChart" component={MainChart}/>
            <Route exact path="/library/tracks" component={MypageMusics} />
            <Route exact path="/library/artists" component={MypageArtists} />
            <Route exact path="/library/albums" component={MypageAlbums} />
            <Route exact path="/library/playlists" component={MypagePlaylists} />
            <Route exact path="/player" component={Player} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
            <Route exact path="/sidenav" component={Pidenav} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
            <Route exact path="/track" component={MusicDetail}/>
            <Route exact path="/layout" component={Layout}/>
          </Switch>
        </Layout>

     
      </Router>
    );
  }
}

export default Routes;
