import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import Main from "./Pages/Main/Main";
import Chart from "./Pages/Chart/Chart";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 845d5d1... [ADD] sidenav 구현 완료, mypage 기본 레이아웃 완료, img 파일 추가
import MypageMusics from "./Pages/Mypage/MypageMusics";
import MypageArtists from "./Pages/Mypage/MypageArtists";
import MypageAlbums from "./Pages/Mypage/MypageAlbums";
import MypagePlaylists from "./Pages/Mypage/MypagePlaylists";
=======
import MypageMusics from "./Pages/Mypage/Music/MypageMusics";
import MypageArtists from "./Pages/Mypage/Artist/MypageArtists";
import MypageAlbums from "./Pages/Mypage/Album/MypageAlbums";
import MypagePlaylists from "./Pages/Mypage/Playlist/MypagePlaylists";
>>>>>>> e2d20fb... [ADD] 마이페이지 구현중
import Player from "./Pages/Player/Player"; // jintae - 첫 번째 character 대문자로 수정
import Pidenav from "./Components/SideNav/SideNav"; // jintae - 첫 번째 character 대문자로 수정
<<<<<<< HEAD
import TopChart from "./Pages/Chart/TopChart";
import MainChart from "./Pages/Chart/MainChart";
=======
import Mypage from "./Pages/Mypage/Mypage";
import player from "./Pages/Player/Player";
import sidenav from "./Components/SideNav/SideNav";
>>>>>>> 2b5c9ab... [ADD] style component ThemeProvider 추가
=======
>>>>>>> 845d5d1... [ADD] sidenav 구현 완료, mypage 기본 레이아웃 완료, img 파일 추가

class Routes extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Chart" component={Chart} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/topChart" component={TopChart} />
=======
>>>>>>> 845d5d1... [ADD] sidenav 구현 완료, mypage 기본 레이아웃 완료, img 파일 추가
          <Route exact path="/MyPageMusics" component={MypageMusics} />
          <Route exact path="/MypageArtists" component={MypageArtists} />
          <Route exact path="/MypageAlbums" component={MypageAlbums} />
          <Route exact path="/MypagePlaylists" component={MypagePlaylists} />
=======
          <Route exact path="/library/tracks" component={MypageMusics} />
          <Route exact path="/library/artists" component={MypageArtists} />
          <Route exact path="/library/albums" component={MypageAlbums} />
          <Route exact path="/library/playlists" component={MypagePlaylists} />
>>>>>>> e2d20fb... [ADD] 마이페이지 구현중
          <Route exact path="/player" component={Player} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
          <Route exact path="/sidenav" component={Pidenav} /> {/* jintae - 첫 번째 character 대문자로 수정 */}
<<<<<<< HEAD
          <Route exact path="/MainChart" component={MainChart}/>
=======
          <Route exact path="/MyPage" component={Mypage} />
          <Route exact path="/player" component={player} />
          <Route exact path="/sidenav" component={sidenav} />
>>>>>>> 2b5c9ab... [ADD] style component ThemeProvider 추가
=======
>>>>>>> 845d5d1... [ADD] sidenav 구현 완료, mypage 기본 레이아웃 완료, img 파일 추가
        </Switch>
      </Router>
    );
  }
}

export default Routes;
