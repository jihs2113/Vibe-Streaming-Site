import React, {useState} from 'react';
import styled from 'styled-components';
import PlayerBottom from "./Components/PlayerBottom/PlayerBottom";
import PlayerTop from "./Components/PlayerTop/PlayerTop";
import url from "./background.PNG";


function Player () {
  const [show, setShow] = useState(true);
  const [urlSmall, setUrlSmall] = useState("");

  const updateShow = () => {
    setShow(!show);
  }
  return (
    <PlayerTag>
      <PlayerTop updateShow={updateShow} show = {show} setUrlSmall={setUrlSmall}/>
      <PlayerBottom updateShow={updateShow} />
    </PlayerTag>
  )
};




const PlayerTag = styled.div`
  background-image: url(${url});
  background-size: cover;
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  overflow:hidden;
`;
export default Player;