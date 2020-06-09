import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SideNav from '../../../Components/SideNav/SideNav';
import PlayListModal from './PlayListModal';
import icon from '../../../Images/vibe.png';

function MypagePlaylists () {
  const [ isModal, setIsModal ] = useState(false);
  const [ isPlayinfo, setIsPlayInfo ] = useState(false);
  const [ palyListName, setPlayListName ] = useState("");

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  }

  const oepnHover = () => {
    setIsPlayInfo(true);
  }

  const closeHover = () => {
    setIsPlayInfo(false);
  }

  useEffect(() => {
    fetch("http://localhost:3000/jt_data/jt.json" , {
      method: "GET",
      headers : {
          "Content-type" : "application/json",
          "Authorization" : "token"
      },
    })
    .then(res => res.json())
    .then(res => setPlayListName(res.playlist));
  },[]);


  useEffect(() => {
    setIsModal(isModal);
  },[]);

  const imgSrc = "data:image/png;base64,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"
  return (
    <MypagePlaylistTag>
      <SideNav />
      <Container>
        <Content>
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
                  palyListName && palyListName.map((playlist) => {
                    return (
                      <li key={playlist.playlist_id}>
                        <PlayBtn role="button" className="listBtn" onMouseOver={oepnHover} onMouseOut={closeHover}>
                          <AddList className="listAdd">
                            <img src={imgSrc} alt="playLogo"/>
                            <PlayInfo isPlayinfo={isPlayinfo}>
                              <div>
                                <PlayButton type="button"></PlayButton>
                              </div>
                              <div>
                                <AddButton type="button"></AddButton>
                              </div>
                            </PlayInfo>
                          </AddList>
                          <p>{playlist.playlist_name} ({playlist.playlist_number}곡)</p>
                        </PlayBtn>
                      </li>
                    );
                  })
                }
                {/* 플레이 리스트가 추가되면 나오는 ui */}
              </ul>
            </div>
          </Section>
        </Content>
      </Container>
    </MypagePlaylistTag>
  )
};

export default MypagePlaylists;

const MypagePlaylistTag = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  padding-left: 250px;
  background: ${props=> props.theme.color.white};
  @media(max-width: 768px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 100%;
  width: 964px;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 67px 0 0;
    margin: 0 22px;
  }
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
      justify-content: center;
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