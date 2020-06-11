import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PlayerMain from '../PlayerMain/PlayerMain';
import PlayerRight from '../PlayerRight/PlayerRight';
import axios from 'axios';


function PlayerTop ({updateShow, show,setUrlSmall}) {
  const [curr, setCurr] = useState(true);
  const [mainImg, setMainImg] = useState("");
  const mainUpdate = ()=> {
    if(!curr){
      updateShow();
    }
  }
  
  return (
   <PlayerTopTag>
    <PlayerMain show={show} mainUpdate={mainUpdate} setCurr={setCurr} mainImg={mainImg}/>
    <PlayerRight show={show} setMainImg={setMainImg} />
   </PlayerTopTag> 
  )
};

export default PlayerTop;

const PlayerTopTag = styled.div`

`;