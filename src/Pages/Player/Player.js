import React, {useState} from 'react';
import styled from 'styled-components';
import PlayerBottom from "./Components/PlayerBottom/PlayerBottom";
import PlayerTop from "./Components/PlayerTop/PlayerTop";
import url from "./background.PNG";


function Player () {
  return (
    <PlayerTag>
      <PlayerTop />
      <PlayerBottom />
    </PlayerTag>
  )
};

export default Player;


const PlayerTag = styled.div`
  position:absolute;
  width:100%;
  top:0;
  bottom:0;
  overflow:hidden;
  
`;
