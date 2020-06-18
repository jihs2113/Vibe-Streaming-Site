import React, { useState, useEffect } from 'react';
import styled,{ css } from 'styled-components';
import SelectedList from '../../Chart/SelectedList';
import { API } from '../../../config';
import { connect } from 'react-redux';
import { setSongIndex, setSongList } from '../../../store/actions/index';
import icon from '../../../Images/vibe.png';


function MypageMusic ({ setSongList, setSongIndex, songList, songIndex }) {
  const [ favoriteMusic, setFavoriteMusic ] = useState([]);

  useEffect(() => {
      const token = localStorage.getItem('access_token');
      console.log("token: ", token)
      fetch(`${API}/account/myfavorite` , {
      method: "GET",
      headers : {
          "Content-type" : "application/json",
          "Authorization" : token
      },
      })
      .then(res => res.json())
      .then(res => setFavoriteMusic(res.data))
      .catch(err => console.log("err: ", err));
  },[]);

  const allPlayBtn = (play) => {
    const token = localStorage.getItem('access_token');
    const array = [];
    const tmp = songList.length;
    for(let i = 0;  i< play.length; i ++ ) {
      array.push(play[i].id);
    }
  
    fetch(`${API}/music/playlist`, {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Authorization" : token
      },
      body: JSON.stringify({
        music_id: array
      })
    })
    .then(res => {
      if(res.status === 200) {
        fetch(`${API}/music/playlist`, {
          headers: {
            Authorization: token,
          },
        })
        .then(res => res.json())
        .then(res => {
          setSongList(res.music);
        });
        songList[tmp] && setSongIndex(tmp);
      } else {
        for(let i = 0;i< songList.length; i++){
          if(songList[i].id === play[0].id){
            setTimeout(setSongIndex(i),1000)
          }
        }
      }
    });
  }

  return (
    <MypageMusicTag>
          <TitleWrap>
            <TitleBox>
              <div className="titleDefault">
                <Title>보관함</Title>
                <AreaSubTit>노래</AreaSubTit>
              </div>
              <div className="buttonBox">
                <div className="buttonWrap">
                  <button type="button" className="playBtn" onClick={() => {allPlayBtn(favoriteMusic)}}>
                    <span>전체재생</span>
                  </button>
                </div>
                <div className="buttonWrap">
                  <button type="button" className="randomBtn">
                    <span>랜던재생</span>
                  </button>
                </div>
              </div>
            </TitleBox>
          </TitleWrap>
          <div>
            {
              favoriteMusic && favoriteMusic ? (
                favoriteMusic.map((music,i) => {
                  return (
                    <SelectedList
                      key={music.id}
                      img={music.image}
                      name={music.name}
                      artist={music.artist}
                      album={music.album}
                      list={music.lyrics}
                      lyrics={music.lyrics}
                      select={music.select}
                      like={music.like}
                    />
                  );
                })) : (
                <Inner>
                  <InnerArea>
                    <AreaTit>좋아하는 노래</AreaTit>
                    <SubTit>내가 좋아하는 노래들을 모아서 감상해보세요.</SubTit>
                  </InnerArea>
                </Inner>
              )
            }
          </div>
    </MypageMusicTag>
  )
};

const mapStateToProps = (state) => {
  return {
    songList: state.songList,
    songIndex: state.songIndex
  };
};

export default connect(mapStateToProps, { setSongIndex, setSongList })(MypageMusic);

const MypageMusicTag = styled.div`
  height: 100%;
  width: 964px;
  margin: 0 auto;
`;

const TitleWrap = styled.h2`
  padding: 50px 0 48px;
`;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.color.brightGrey};
  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttonWrap {
    padding-left: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 134px;
      padding: 10px;
      border-radius: 4px;
      &.playBtn {
        background-color: #ff1150;
        border: 1px solid #ff1150;
        &::before {
            ${beforeIcon};
            width: 19px;
            height: 20px;
            margin-bottom: 2px;
            background-position: -592px -689px;
          }
        span {
          color: ${props => props.theme.color.darkwhite};
        }
      
      }
      &.randomBtn {
        border: 1px solid #d7d7d7;
        background-color: #fbfbfb;
        &::before {
            ${beforeIcon};
            width: 19px;
            height: 20px;
            background-position: -688px -166px;
        }
      }
      span {
        margin-left: 5px;
        font-size: 16px;
        line-height: 1.4;
      }
    }
  }
`;

const Title = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${props => props.theme.color.grey};
`;

const AreaSubTit = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 12px 0;
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
`;

const InnerArea = styled.div`
    width: 100%;
    text-align: center;
`;

const AreaTit = styled.p`
    font-size: 27px;
    line-height: 1.4;
    color: ${props => props.theme.color.deepDartGreay};
    font-weight: 700;
`;

const SubTit = styled.p`
    padding-top: 10px;
    font-size: 20px;
    line-height: 1.4;
    color: ${props => props.theme.color.darkGrey};
`;