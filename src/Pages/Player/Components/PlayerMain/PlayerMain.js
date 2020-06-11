import React, {useState} from 'react';
import styled from 'styled-components';

function PlayerMain ({show, mainUpdate, setCurr}) {
  
  return (
    <PlayerMainTag show={show} onClick={()=>mainUpdate()}>
      <MainImg onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} src="https://musicmeta-phinf.pstatic.net/album/003/128/3128216.jpg?type=r720Fll&v=20200218131711">
      </MainImg>
    </PlayerMainTag>
  )
};

export default PlayerMain

const PlayerMainTag = styled.div`
  background-color: rgba(20,20,20,.97);
  position: absolute;
  top: ${props=>props.show? '0' : '1000vh'};
  opacity:${props=>props.show? '1' : '0'};
  right: 350px;
  bottom: 81px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  
`

const MainImg = styled.img`
  height: 514px;
  width: 514px;
  user-select:none;
  @media (max-width: 1000px) {
    height: 284px;
    width: 284px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;