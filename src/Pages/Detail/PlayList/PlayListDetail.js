import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SelectedList from '../../Chart/SelectedList';
import { API } from '../../../config';
import { connect } from 'react-redux';
import { setSongIndex, setSongList } from '../../../store/actions/index';
import icon from '../../../Images/vibe.png';

function PlayListDetail({ setSongList, setSongIndex, songList, songIndex, match }) {
    const [ myList, setMyList ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        fetch(`${API}/music/myplaylist/${match.params.id}` , {
        method: "GET",
        headers : {
            "Content-type" : "application/json",
            "Authorization" : token
        },
        })
        .then(res => res.json())
        .then(res => setMyList(res.data))
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

    const imgSrc = "data:image/png;base64,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"
    return (
        <>
         {
             myList.length  ? (
                <PlayListDetailTag>
                    <Section>
                        <ArtistWrap>
                            <ArtistImgBox>
                                <img src={imgSrc} alt="playlistImg"/>
                            </ArtistImgBox>
                            <ArtistInfo>
                                <AreaTextBox>
                                    <h2>{myList[0].myplaylist_name}</h2>
                                    <p className="artistName">총 {myList.length}곡이 담겨 있습니다.</p>
                                </AreaTextBox>
                                <AreaButtonBox>
                                    <Button>
                                        <button className="playBtn" type="button" onClick={() => {allPlayBtn(myList)}}>
                                            <span>전체재생</span>
                                        </button>
                                    </Button>
                                    <Button>
                                        <button className="mp3Btn" type="button">
                                            <span>MP3 구매</span>
                                        </button>
                                    </Button>
                                    <Button>
                                        <button className="likeBtn" type="button"></button>
                                        <button className="addBtn" type="button"></button>
                                    </Button>
                                </AreaButtonBox>
                            </ArtistInfo>
                        </ArtistWrap>
                    </Section>
                    <ListBox>
                        {
                            myList && myList.map((music, i) => {
                                return (
                                    <SelectedList
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
                            })
                        }
                    </ListBox>
                </PlayListDetailTag>
             ) : null 
         }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      songList: state.songList,
      songIndex: state.songIndex
    };
  };

export default connect(mapStateToProps, { setSongIndex, setSongList })(PlayListDetail);

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const PlayListDetailTag = styled.div`
    height: 100%;
    width: 964px;
    margin: 0 auto;
`;

const Section = styled.section`
    
`;

const ArtistWrap = styled.div`
    display: flex;
    margin: 60px 0;
`;

const ArtistImgBox = styled.div`
    width: 195px;
    height: 195px;
    margin-right: 30px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const ArtistInfo = styled.div`
    position: relative;
    width: 77%;
`;

const AreaTextBox = styled.div`
    min-height: 143px;
    line-height: 1.4;
    h2 {
        font-size: 30px;
    }
    .artistName {
        padding: 4px 0;
        font-size: 19px;
    }
    .pTagBox {
        font-size: 14px;
        color: ${props => props.theme.color.grey};
    }
`;

const AreaButtonBox = styled.div`
    display: flex;
    align-items: center;
    height: 52px;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 124px;
    button {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
        }
    }
    &:first-child {
        margin-left: 0;
    }
    .playBtn {
        background-color: ${props => props.theme.color.mainColor};
        border: ${props => props.theme.color.mainColor};
        span {
            color: ${props => props.theme.color.darkwhite};
            &::before {
                ${beforeIcon};
                width: 19px;
                height: 20px;
                margin: -3px 4px 0 0;
                background-position: -592px -689px;            
            }
        }
        
    }
    .mp3Btn {
        background-color: ${props => props.theme.color.brightGrey};
        border: ${props => props.theme.color.brightGrey};
    }
    .likeBtn {
        background: none;
        &::after {
            ${beforeIcon};
            width: 42px;
            height: 42px;
            background-position: -54px -577px;
        }
    }
    .addBtn {
        background: none;
        &::after {
            ${beforeIcon};
            width: 42px;
            height: 42px;
            background-position: -154px -577px;
        }
    }
    margin-left: 10px;
`;

const ListBox = styled.div`
    height: 100%;
`;

const ContentBox = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    span {
        font-size: 16px;
        color: #999;
        &::before {
            ${beforeIcon};
            background-position: -340px -505px;
            width: 58px;
            height: 58px;
            display: block;
            margin: 0 auto 24px;
        }
    }
`;