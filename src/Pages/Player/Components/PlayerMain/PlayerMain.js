import React, {useState} from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { setPopup } from '../../../../store/actions';

function PlayerMain ({show, mainImg, songInfo, setPopup, popup}) {
  
  const [curr, setCurr] = useState(false);
  
  return (
    <PlayerMainTag popup={popup} onClick={()=>{!curr && setPopup()}}>
      <MainImg onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} src= {songInfo.urlLarge}>
      </MainImg>
    </PlayerMainTag>
  )
};

const mapStateToProps = (state) =>{
  return{
    songInfo: state.songInfo,
    popup: state.popup
  };
};

export default connect(mapStateToProps, {setPopup})(PlayerMain);

const PlayerMainTag = styled.div`
  background-color: rgba(20,20,20,.97);
  position: absolute;
  top: ${props=>props.popup? '0' : '1000vh'};
  opacity:${props=>props.popup? '1' : '0'};
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