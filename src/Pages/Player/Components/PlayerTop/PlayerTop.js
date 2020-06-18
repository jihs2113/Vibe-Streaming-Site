import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PlayerMain from '../PlayerMain/PlayerMain';
import PlayerRight from '../PlayerRight/PlayerRight';
import axios from 'axios';


function PlayerTop () {
  
  
  return (
   <PlayerTopTag>
    <PlayerMain />
    <PlayerRight />
   </PlayerTopTag> 
  )
};

export default PlayerTop;

const PlayerTopTag = styled.div`
`;