import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

function PlayerBottom ({updateShow}) {
  const id = useRef(null);
  const [curr, setCurr] = useState(false);
  const [playPoint, setPlayPoint] = useState(0);
  const [playWidth, setPlayWidth] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [playerWidth, setPlayerWidth] = useState(100);
  
  const bottomUpdate = ()=> {
    if(!curr){
      updateShow();
    }
  };

  const updatePlayWidth = ()=>{
    setPlayWidth(playPoint);
  };

  const updatePlayPoint = (event)=>{
    setPlayPoint(event.clientX/event.currentTarget.offsetWidth*100);
    setPlayerWidth(event.currentTarget.offsetWidth);
  };
  
  const timerFunc = ()=>{
      setPlayWidth(prevplayWidth=>prevplayWidth+0.05);
    };

  useEffect(() => {
    console.log(playWidth);
    id.current = setInterval(()=>timerFunc() ,1);
    if(!playing){
      clearInterval(id.current);
    }
    return () => {
      clearInterval(id.current);
    }
  }, [playing]);

  useEffect(()=>{
    console.log(playWidth);
    if(playWidth>100){
      clearInterval(id.current);
    }
  },[playWidth]);
  
  const stopPlay = () => {
    console.log("sdfsddafs", playing);
    setPlaying(!playing);
  };

  return (
   <PlayerBottomTag onClick={()=>bottomUpdate()}>
    <MusicBarBox onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={()=>updatePlayWidth()} onMouseMove={(event)=>updatePlayPoint(event)}>
      <Dim>

      </Dim>
      <MusicBarLoad>
        
      </MusicBarLoad>
      <MusicBarPlay playWidth = {playWidth}>

      </MusicBarPlay>
    </MusicBarBox>
    <PlayerBottomMain>
      <PlayButton onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={stopPlay}>
        Play/STOP!
      </PlayButton>
    </PlayerBottomMain >
   </PlayerBottomTag>     
  )
};

export default PlayerBottom;

const PlayerBottomTag = styled.div`
  background-color: rgba(25,25,25,.97);
  height: 81px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index:0;
`;
const MusicBarBox = styled.div`
  position: absolute;
  top:0;
  right:0;
  left:0;
  width: 100%;
  height: 3px;
  cursor: pointer;
  transition: height .1s ease-in-out;
  &:hover {
    height: 18px;
  }
`;
const MusicBarLoad = styled(MusicBarBox)`
  width: 50%;
  height: 100%;
  background-color: #4b4b4b;
`;
const MusicBarPlay =styled(MusicBarBox)`
  width: ${props=>`${props.playWidth}%`};
  height: 100%;
  background-color: #ff1150;
`;
const PlayerBottomMain = styled.div`
display:flex;
justify-content:center;
align-items:center;
  background-color:orange;
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:-2;
`;
const Dim = styled.div`
  position: absolute;
  top:0;
  right:0;
  left:0;
  width: 100%;
  background-color: rgba(25,25,25,.97);
  height: 3px;
  z-index:-1;
  transition: height .1s ease-in-out;
  pointer-events:none;
  ${MusicBarBox}:hover & {
    height: 81px;
  }
`;
const PlayButton = styled.button`
  height:40px;
  width:100px;
`;
