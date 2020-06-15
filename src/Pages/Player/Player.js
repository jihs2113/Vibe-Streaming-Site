import React, {useState} from 'react';
import styled from 'styled-components';
import PlayerBottom from "./Components/PlayerBottom/PlayerBottom";
import PlayerTop from "./Components/PlayerTop/PlayerTop";
import url from "./background.PNG";


function Player () {
  const [show, setShow] = useState(true);

  const updateShow = () => {
    setShow(!show);
  }
  return (
    <PlayerTag>
      <PlayerTop updateShow={updateShow} show = {show} />
      <PlayerBottom updateShow={updateShow} />
    </PlayerTag>
  )
};




const PlayerTag = styled.div`
  position:absolute;
  width:100%;
  top:0;
  bottom:0;
  overflow:hidden;
  z-index:9999;
`;
