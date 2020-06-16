import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MypageExistArtist from './MypageExistArtist';

function MypageArtists () {
  const [ stateLike, setStateLike ] = useState(true);
  const [ artistArray, setArtistArray ] = useState([]);

  const onRemove = (artist) => {
    console.log("onRemove: ", artist);
    const selectArtist = [...artistArray];
    const i = selectArtist.indexOf(artist);
    artistArray[i] ={...artist};
    setArtistArray(
      artistArray.filter(artistArray => artistArray.artist_id !== artist.artist_id)
    );
  };

  useEffect(() => {
    fetch("http://localhost:3000/jt_data/jt.json")
      .then(res => res.json())
      .then(res => setArtistArray(res.artist));
  },[]);

  return (
    <MypageArtistTag>
      <TitleWrap>
        <TitleBox>
          <Title>보관함</Title>
          <AreaSubTit>아티스트</AreaSubTit>
        </TitleBox>
      </TitleWrap>
      {
        artistArray.length > 0 && artistArray ?
        (
          <MypageExistArtist 
            stateLike={stateLike} 
            onRemove={onRemove} 
            artistArray={artistArray} 
          />
          
        ) : (
          <Inner>
            <InnerArea>
              <AreaTit>좋아하는 아티스트</AreaTit>
              <SubTit>내가 좋아하는 아티스트를 보관함에서 확인해보세요.</SubTit>
            </InnerArea>
          </Inner>   
        )
      }
    </MypageArtistTag>
  )
};

export default MypageArtists;

const MypageArtistTag = styled.div`
  height: 100%;
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

