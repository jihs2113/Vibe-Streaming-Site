import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';
import icon from '../../../../Images/vibe.png';
import { connect } from "react-redux";
import { shuffle, setPopup, setRepeatIndex } from "../../../../store/actions";

function PlayerBottom ({shuffleIndex,shuffle,popup, setPopup, repeatIndex, setRepeatIndex,songInfo}) {
  const id = useRef(null);
  const [curr, setCurr] = useState(false);
  const [hovLike, setHovLike] = useState(false);
  const [hovLyrics, setHovLyrics] = useState(false);
  const [hovMore, setHovMore] = useState(false);
  const [playPoint, setPlayPoint] = useState(0);
  const [playWidth, setPlayWidth] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [playerWidth, setPlayerWidth] = useState(100);
  const [audio, setAudio] = useState(null);
  let playerRef = useRef(null);
  const player = new Audio();

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
    // console.log(playWidth);
    id.current = setInterval(()=>timerFunc() ,1);
    if(!playing){
      clearInterval(id.current);
    }

    return () => {
      clearInterval(id.current);
    }
  }, [playing]);

  useEffect(()=>{
    // console.log(playWidth);
    if(playWidth>100){
      clearInterval(id.current);
    }
  },[playWidth]);
  
  // const stopPlay = () => {
  //   let audio;
  //   if(playing){
  //     audio.pause();
  //   }else{
  //     audio = new Audio("http://10.58.0.24:8000/music/stream?music_id=2")
  //     audio.play();
  //   }
  //   console.log("sdfsddafs", playing);
  //   setPlaying(!playing);
  //   console.log(audio.currentTime);
  // };

  useEffect(()=>{
  
    playerRef.current = player;
    console.log("updated playerRef",playerRef.current)
  },[player.src]);
  
  useEffect(()=>{
    startPlay();
  },[songInfo.id]);

  const startPlay = () => {
    playerRef.current.src = `http://10.58.0.24:8000/music/stream?music_id=${songInfo.id}`;
    console.log("this is player", player.src)
    playerRef.current.play();
    console.log("duration",playerRef.current);
    console.log("started play");
    setPlaying(!playing);
  };

  const stopPlay = () => {
    if(playing){
      playerRef.current.pause();
    }else{
      playerRef.current.play();
    }
    console.log("sdfsddafs", playing);
    setPlaying(!playing);

  };
  // const context = new AudioContext();
  // let yodelBuffer;
  // const stopPlay = () => {
  //   fetch("http://192.168.0.3:8000/music/stream?music_id=2")
  //   // fetch("http://localhost:3000/galbi_data/2.mp3")
  //   .then(response => response.arrayBuffer())
  //   .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  //   .then(audioBuffer => {
  //     yodelBuffer = audioBuffer;
  //   });
  //   const source = context.createBufferSource();
  //   source.buffer = yodelBuffer;
  //   source.connect(context.destination);
  //   if(playing){
  //     source.stop(context.currentTime+1);
  //   }else{
  //     source.start();
  //   }
  // };

  const likeHov = (bool) =>{
    setCurr(bool);
    setHovLike(bool);
  }

  const lyricHov = (bool) =>{
    setCurr(bool);
    setHovLyrics(bool);
  }

  const moreHov = (bool) =>{
    setCurr(bool);
    setHovMore(bool);
  }
  
  return (
   <PlayerBottomTag onClick={()=>!curr&&setPopup()}>
    <MusicBarBox onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={()=>updatePlayWidth()} onMouseMove={(event)=>updatePlayPoint(event)}>
      <Dim>

      </Dim>
      <MusicBarLoad>
        
      </MusicBarLoad>
      <MusicBarPlay playWidth = {playWidth}>

      </MusicBarPlay>
    </MusicBarBox>
    <PlayerBottomMain>
      <Left>
        <SmallImg src={songInfo.urlSmall} onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)}/>
        <Text>
          <TextTop onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)}>
            {songInfo.title}
          </TextTop>
          <TextBottom onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)}>
            {songInfo.artist}
          </TextBottom>
        </Text>
        <Icons>
          <Like onMouseEnter={()=>likeHov(true)} onMouseLeave={()=>likeHov(false)} curr={hovLike} />
          <Lyrics onMouseEnter={()=>lyricHov(true)} onMouseLeave={()=>lyricHov(false)} curr={hovLyrics} />
          <More onMouseEnter={()=>moreHov(true)} onMouseLeave={()=>moreHov(false)} curr={hovMore} />
        </Icons>
      </Left>
      <Middle>
        <ShuffleIcon onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} shuffleIndex={shuffleIndex} onClick = {()=>shuffle()}/>
        <PlayPrev onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)}></PlayPrev>
        <PlayButton onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={stopPlay}>
          <PlaySpan ></PlaySpan>
        </PlayButton>
        <PlayNext onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={()=>startPlay()} ></PlayNext>
        <LoopIcon onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} repeatIndex={repeatIndex} onClick = {()=>setRepeatIndex(repeatIndex)} />
      </Middle>
      <Right>
        <PopWrap popup={ popup }>
          <PopIcon popup={ popup }>

          </PopIcon>
        </PopWrap>
      </Right>
    </PlayerBottomMain >
   </PlayerBottomTag>     
  )
};

const mapStateToProps = (state) => {
  return{
    shuffleIndex: state.shuffleIndex,
    repeatIndex: state.repeatIndex,
    popup: state.popup,
    songInfo: state.songInfo
  };
};

export default connect(mapStateToProps,{ shuffle, setPopup, setRepeatIndex })(PlayerBottom);

const fullIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

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
justify-content:space-between;
align-items:center;
background-color: rgba(25,25,25,.97);
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
const Left = styled.div`
  height:100%;
  margin-left:18px;
  display:flex;
  align-items:center;
`;

const SmallImg = styled.img`
  height:45px;
  width:45px;
  transition:all 1s ease-in-out;
  @media (max-width: 700px) {
    width:0px;
  }
`;

const Text = styled.div`
  pointer-events:none;
  margin-left: 14px;
  padding-right: 8px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  color:white;
  height: 45px;
`;

const TextTop = styled.div`
pointer-events:none;
  font-size: 14px;
  line-height: 1.25em;
  color: #dfdfdf;
  letter-spacing:0.5px;
`;

const TextBottom = styled.div`
pointer-events:none;
  font-size: 13px;
  line-height: 17px;
  color: #737373;
`;

const Icons = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 114px;
  transition:all 1s ease-in-out;
  @media (max-width: 600px) {
    width:0px;
  }
`;

const Like = styled.div`
  &::after{
    ${fullIcon};
    background-position: ${props=>props.curr ? "-349px -471px":"-440px -627px"};
    height:22px;
    width:22px;
    transition:width 1s ease-in-out;
    @media (max-width: 600px) {
    width:0px;
  }
  }
`;

const Lyrics = styled.div`
  &::after{
    ${fullIcon};
    background-position: ${props=>props.curr ? "-559px -471px":"-499px -471px"};
    height:22px;
    width:22px;
    transition:width 1s ease-in-out;
    @media (max-width: 600px) {
    width:0px;
  }
  }
`;

const More = styled.div`
  &::after{
    ${fullIcon};
    background-position: ${props=>props.curr ? "-350px -627px":"-589px -471px"};
    height:22px;
    width:22px;
    transition:width 1s ease-in-out;
    @media (max-width: 600px) {
    width:0px;
    }
  }
`;

const Middle = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;


const PlayButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: rgba(25,25,25,.97);
  height:56px;
  width:56px;
  border-radius:1000px;
  &:hover{
    background-color:#272727;
  }
`;

const PlaySpan = styled.span`
  padding-left:5px;
  &::after {
      ${fullIcon};
      background-position: -597px -128px;
      width: 22px;
      height: 26px;
  }
`;

const PlayNext = styled.div`
  height:22px;
  margin:0 20px;
  transition: all .2s ease-in-out; 
  &::after {
    ${fullIcon};
    background-position: -319px -471px;
    width: 22px;
    height: 22px;
  }
  &:hover{
    transform: scale(1.2); 
  }
`;

const PlayPrev = styled.div`
  height:22px;
  margin:0 20px;
  transition: all .2s ease-in-out; 
  &::after {
    ${fullIcon};
    background-position: -590px -627px;
    width: 22px;
    height: 22px;
  }
  &:hover{
    transform: scale(1.2); 
  }
`;

const ShuffleIcon = styled.div`
  height:22px;
  margin:0 20px;
  transition: all .2s ease-in-out; 
  transition: opacity .5s ease-in-out;
  &::after {
    ${fullIcon};
    background-position: ${props=>props.shuffleIndex};
    width: 22px;
    height: 22px;
  }
  &:hover{
    transform: scale(1.2); 
  }
  @media (max-width: 1260px) {
    opacity:0;
  }
`;

const LoopIcon = styled.div`
height:22px;
margin: 0 20px;
transition: all .2s ease-in-out; 
transition: opacity .5s ease-in-out;
&::after {
  ${fullIcon};
  background-position: ${props=>props.repeatIndex};
  width: 22px;
  height: 22px;
}
&:hover{
  transform: scale(1.2); 
}
@media (max-width: 1260px) {
  opacity:0;
}
`;

const Right = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const PopWrap = styled.div`
  height:100%;
  border-left: 1px solid hsla(0,0%,84.7%,.15);
  width:81px;
  background-color: ${props=> props.popup? "#ff1150":""};
  display:flex;
  justify-content:center;
  align-items:center;
`;

const PopIcon = styled.div`
  height:26px;
  padding-top:3px;
  transition: all .2s ease-in-out; 
  transition: opacity .5s ease-in-out;
  &::after {
    ${fullIcon};
    background-position: ${props=> props.popup? "-168px -471px": "-593px -295px"};
    width: 26px;
    height: 26px;
  }
  &:hover{
    transform: scale(1.2); 
  }
`;
