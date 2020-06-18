import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PlayListModal from './PlayListModal';
import PlayLists from './PlayLists';
import { API } from '../../../config';
import icon from '../../../Images/vibe.png';

function MypagePlaylists () {
  const [ isModal, setIsModal ] = useState(false);
  const [ isPlayinfo, setIsPlayInfo ] = useState(false);
  const [ playListName, setPlayListName ] = useState("");

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log("token: ", token)
    fetch(`${API}/music/myplaylist` , {
      method: "GET",
      headers : {
          "Content-type" : "application/json",
          "Authorization" : token
      },
    })
    .then(res => res.json())
    .then(res => setPlayListName(res.data))
    .catch(err => console.log("err: ", err));
  },[]);

  useEffect(() => {
    setIsPlayInfo(isPlayinfo)
  },[isPlayinfo])

  useEffect(() => {
    setIsModal(isModal);
  },[isModal]);

  // redux state get하는 곳인데... 
  return (
      <MypagePlaylistTag>
        <TitleWrap>
          <TitleBox>
            <Title>보관함</Title>
            <AreaSubTit>플레이리스트</AreaSubTit>
          </TitleBox>
        </TitleWrap>
        <Section>
          <div className="inner">
            <ul className="playList">
              <li className="defaultLi">
                <PlayBtn type="button" className="listBtn" onClick={openModal}>
                  <ButtonArea className="buttonArea"></ButtonArea>
                  <p>새 플레이 리스트 추가</p>
                </PlayBtn>
                <PlayListModal visible={isModal} isCloseModal={closeModal}/>
              </li>
              
              {/* 플레이 리스트가 추가되면 나오는 ui */}
              {
                playListName && playListName.map((playlist) => {
                  return (
                    <PlayLists
                      playlist={playlist}
                    />
                  );
                })
              }
              {/* 플레이 리스트가 추가되면 나오는 ui */}
            </ul>
          </div>
        </Section>
      </MypagePlaylistTag>
  )
};


export default MypagePlaylists;

const MypagePlaylistTag = styled.div`
  height: 100%;
  width: 964px;
  margin: 0 auto;
`;

const TitleWrap = styled.h2`
  padding: 41px 0 0;
`;

const TitleBox = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.color.brightGrey};
`;

const Title = styled.p`
  font-size: 15px;
  color: ${props => props.theme.color.grey};
`;

const AreaSubTit = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 15px 0;
`;
const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const Section = styled.section`
  margin-top: 30px;
  .inner {
    height: 100%;
    .playList {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        display: flex;
        align-items: center;
        position: relative;
        width: 23%;
        height: 100%;
        transition: height 0.3s ease-in, 0.3s ease-in;
        padding: 0 16px 40px 0;
      }
    }
  }
`;

const PlayBtn = styled.a`
  width: 100%;
  background: none;
  :hover {
    cursor: pointer;
  }
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
  }
`;

const ButtonArea = styled.div`
  position: relative;
  padding-top: 100%;
  text-align: center;
  background-color: #f3f3f3;
  &::after {
    ${beforeIcon};
    background-position: -4px -505px;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
`;

const AddList = styled.div`
  position: relative;
  padding-top: 100%;
  text-align: center;
  background-color: #f3f3f3;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
  }
  :hover {
   
  }
`;

const PlayInfo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 33%;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #0000;
    background-image: linear-gradient(0deg, rgba(0,0,0, 0.3), rgba(102,102,102, 0)); 
    border: none;
    opacity: ${props => props.isPlayinfo ? 1 : 0};
    transition: opacity .2s ease-in;
    div {
      display: flex;
      align-items: center;
      height: 100%;
    }
`;

const PlayButton = styled.button`
  position: relative;
  width: 100%;
  background: none;
  ::before {
    ${beforeIcon};
    width: 34px;
    height: 34px;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.05);
    transition: transform .2s ease-in;
   
  }
  ::after {
    ${beforeIcon};
    position: absolute;
    width: 14px;
    height: 16px;
    top: 50%;
    left: 50%;
    background-position: -252px -661px;
    transform: translate(-6px,-8px);
  }
`;

const AddButton = styled.button`
  position: relative;
  width: 100%;
  background: none;
  ::after {
    ${beforeIcon};
    background-position: -554px -577px;
    width: 42px;
    height: 42px;
    transition: transform .2s ease-in;
  }
`;

