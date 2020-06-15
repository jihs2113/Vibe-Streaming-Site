import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PlayerMain from '../PlayerMain/PlayerMain';
import PlayerRight from '../PlayerRight/PlayerRight';
import axios from 'axios';


function PlayerTop ({updateShow, show}) {
  
  
  return (
   <PlayerTopTag>
    <PlayerMain show={show} />
    <PlayerRight show={show} />
   </PlayerTopTag> 
  )
};

export default PlayerTop;

const PlayerTopTag = styled.div`

`;