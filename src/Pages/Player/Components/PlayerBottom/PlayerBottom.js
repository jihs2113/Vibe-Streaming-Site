import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';
import icon from '../../../../Images/vibe.png';
import url from "../../../../config";
import { connect } from "react-redux";
import { shuffle, setPopup, setRepeatIndex, setPlaying, setSongInfo, setSongIndex, setSongList } from "../../../../store/actions";

function PlayerBottom ({shuffleIndex,shuffle,popup, setPopup, repeatIndex, setRepeatIndex, setSongInfo, songIndex, setSongIndex, songInfo, playing, setPlaying, songList, setSongList}) {
  const id = useRef(null);
  const [curr, setCurr] = useState(false);
  const [hovLike, setHovLike] = useState(false);
  const [hovLyrics, setHovLyrics] = useState(false);
  const [hovMore, setHovMore] = useState(false);
  const [playPoint, setPlayPoint] = useState(0);
  const [playWidth, setPlayWidth] = useState(0);
  const [playerWidth, setPlayerWidth] = useState(100);
  const [start, setStart] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [volume, setVolume] = useState(1);
  const [mute, setMute] = useState(true);
  const [vWidth, setVWidth] = useState(100);
  const [like, setLike] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);
  let playerRef = useRef(null);
  const player = new Audio();
  const updatePlayWidth = (event)=>{
    setPlayWidth(event.clientX/event.currentTarget.offsetWidth*100);
    setPlayTime(event.clientX/event.currentTarget.offsetWidth*duration);
    playerRef.current && (playerRef.current.currentTime = event.clientX/event.currentTarget.offsetWidth*duration);
  };
  
  const updatePlayPoint = (event)=>{
    setPlayPoint();
    setPlayerWidth(event.currentTarget.offsetWidth);
  };
  
  const timerFunc = ()=>{
      setPlayWidth(playWidth => playWidth + 0.5);
      setPlayTime(playTime=> playTime+1);
    };

  useEffect(()=>{
    playerRef.current && (mute ? playerRef.current.volume= vWidth/100 : playerRef.current.volume=0)
  },[mute,vWidth,playerWidth]);

  useEffect(() => {
    // console.log(playWidth);
    id.current = setInterval(()=>timerFunc() ,1000);
    if(!playing){
      clearInterval(id.current);
    }

    return () => {
      clearInterval(id.current);
    }
  }, [playing]);

  useEffect(()=>{
    // console.log(playWidth);
    // console.log(songIndex);
    // console.log(songList.length);
    if(playWidth > 100){
      
      fetch(`${url}/music/count`, {
        method: "POST",  
        headers: {  
          Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
        },
        body: JSON.stringify({
          music_id: songInfo.id,
        }),
      });

      clearInterval(id.current);
      if(repeatIndex==="-650px -627px"){//한번 전체 재생
        if(songIndex >= songList.length-1){
          setSongIndex(songIndex);
        }else{
          setSongIndex(songIndex+1);
        }
      }else if(repeatIndex==="-688px -34px"){//전체 반복재생
        if(songIndex >= songList.length-1){
          setSongIndex(0);
        }else{
          setSongIndex(songIndex+1);
        }
      }else{//한곡 반복재생
        startPlay();
      }
      id.current = setInterval(()=>timerFunc() ,1000);
    }
    playerRef.current && setDuration(playerRef.current.duration);
    console.log("fsdafsd",duration);
  }, [playWidth]);

  const goToNext = () => {
    if(songIndex>=songList.length-1){
      setSongIndex(0);  
    }else{
      setSongIndex(songIndex+1);
    }
    console.log(songList);
  };
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
  },[player.src]);
  
  useEffect(()=>{
    
    setStart(start+1);
    startPlay();
    console.log("playWidth", playWidth);
    console.log("playPoint",playPoint);
    console.log("is playing", playing);
    console.log("music data",playerRef);
    console.log("songInfo",songInfo);
    setLike(songInfo.like);
  },[songInfo.id]);

  const startPlay = () => {
    setPlayWidth(0);
    setPlayPoint(0);
    setPlayTime(0);
    playerRef.current.src = `${url}/music/stream?music_id=${songInfo.id}`;
    if(start>1){
      playerRef.current.play();
      !playing && setPlaying();
    }
  };

  const stopPlay = () => {
    if(playing){
      playerRef.current.pause();
    }else{
      playerRef.current.play();
    }
    setPlaying();
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

  const chooseVolume = (event) => {
    setVWidth(event.clientX-event.target.getBoundingClientRect().left);
  }

  const changeLike = () => {
    fetch(`${url}/account/myfavorite`, {
      method: !like ? "POST" : "DELETE",  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: songInfo.id,
      }),
    });
    setLike(!like);
    fetch(`${url}/music/playlist`, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
    }).then(res=>res.json()).then(res=>{ 
      setSongList(res.music);
    });
  }

  useEffect(()=>{
    songList[0] && setSongInfo(songList[songIndex])
  },[songIndex]);
  
  return (
   <PlayerBottomTag onClick={()=>!curr&&setPopup()}>
    <MusicBarBox onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={(event)=>updatePlayWidth(event)} onMouseMove={(event)=>updatePlayPoint(event)}>
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
          <Like onClick = {()=>changeLike()} onMouseEnter={()=>likeHov(true)} onMouseLeave={()=>likeHov(false)} curr={hovLike} like={like} />
          <Lyrics onClick = {()=>setDisplay(!display)} onMouseEnter={()=>lyricHov(true)} onMouseLeave={()=>lyricHov(false)} curr={hovLyrics}>
            <ModalPosition display={display}>
              <ModalInner display={display}>
                <Close onClick={()=>setDisplay(!display)}></Close>
                <ModalImage>
                  <img className="Mimg" src={songInfo.urlSmall}
                          alt=""/>
                  <ModalTitle>
                      <span style={{fontWeight: "600"}}>{songInfo.title}</span>
                      <span>{songInfo.artist}</span>
                  </ModalTitle>
                </ModalImage>
                <ModalText>
                    <span>
                        {songInfo.lyrics}
                    </span>
                </ModalText>
              </ModalInner>  
            </ModalPosition> 
          </Lyrics>
          <More onClick={()=>setDisplayMore(!displayMore)} onMouseEnter={()=>moreHov(true)} onMouseLeave={()=>moreHov(false)} curr={hovMore}>
            <LikeInner display = { displayMore }>
              <Title>
                <LikeImage>
                    <img src={songInfo.urlSmall}
                            style={{width: "40px", height: "40px", marginRight: "12px"}} alt=""/>
                    <ImageTitle>
                        <Iname>{songInfo.title}</Iname>
                        <Ivocal>{songInfo.artist}</Ivocal>
                    </ImageTitle>
                
                </LikeImage>
              </Title>
              <Likey>
                  { !like ? 
                    <Joayo onClick = {()=>changeLike()} >
                      좋아요
                    </Joayo>
                    :
                    <Joayo onClick = {()=>changeLike()}>
                      좋아요 취소
                    </Joayo>
                  }
              </Likey>
              <MyList>
                <span >내 플레이리스트 추가</span>
              </MyList>
              <List onClick = {()=>setDisplay(!display)}>
                    <span>가사 보기</span>
              </List>
              <Share>
                    <span>공유</span>
              </Share>
            </LikeInner>
          </More>
        </Icons>
      </Left>
      <Middle>
        <ShuffleIcon onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} shuffleIndex={shuffleIndex} onClick = {()=>shuffle()}/>
        <PlayPrev onClick={()=>{songIndex===0 ? setSongIndex(0) : setSongIndex(songIndex-1)}} onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)}></PlayPrev>
        <PlayButton onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} onClick={stopPlay}>
          <PlaySpan playing={playing}></PlaySpan>
        </PlayButton>
        <PlayNext onClick={()=>goToNext()} onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} ></PlayNext>
        <LoopIcon onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} repeatIndex={repeatIndex} onClick = {()=>setRepeatIndex(repeatIndex)} />
      </Middle>
      <Right>
        <Time>
          <TimeLeft>{ playerRef.current && (Math.floor(playTime/60)<10) ? "0" :""}{ playerRef.current && Math.floor(playTime/60) } : {playerRef.current &&(Math.floor(playTime%60)<10) ? "0" :""}{ playerRef.current && Math.floor(playTime%60) } /</TimeLeft>
          <TimeRight>{ playerRef.current && (Math.floor(playerRef.current.duration/60)<10) ? " 0" :" "}{playerRef.current && ( isNaN(playerRef.current.duration) ? " 00" : Math.floor(playerRef.current.duration/60))} : { playerRef.current && (Math.floor(playerRef.current.duration%60)<10) ? "0" :""}{playerRef.current && ( isNaN(playerRef.current.duration) ? "00" : Math.floor(playerRef.current.duration%60))}</TimeRight>
        </Time>
        <Volume>
          <VolumeIcon onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} mute = { mute } onClick={()=>setMute(!mute)} />
          <VolumeBarBox onClick = {(event)=>chooseVolume(event)} onMouseEnter={()=>setCurr(true)} onMouseLeave={()=>setCurr(false)} >
            <VolumeBarValue vWidth = {vWidth}>

            </VolumeBarValue>
          </VolumeBarBox>
        </Volume>
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
    songInfo: state.songInfo,
    playing: state.playing,
    songIndex: state.songIndex,
    songList: state.songList
  };
};

export default 
connect(mapStateToProps,{ shuffle, setPopup, setRepeatIndex, setPlaying, setSongInfo, setSongIndex, setSongList })(
  PlayerBottom
);


const fullIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;



const PlayerBottomTag = styled.div`
  background-color: rgba(25,25,25,.97);
  height: 81px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index:9999;
  /* z-index:0; */
`;
const MusicBarBox = styled.div`
  position: absolute;
  z-index:9000;
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
  width: 100%;
  /* background-color: #4b4b4b; */
`;
const MusicBarPlay =styled(MusicBarBox)`
  width: ${props=>`${props.playWidth}%`};
  /* transition:width 1.1s ease-in-out; */
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
`;
const Dim = styled.div`
  position: absolute;
  top:0;
  right:0;
  left:0;
  width: 100%;
  background-color: rgba(25,25,25,.80);
  height: 3px;
  transition: height .1s ease-in-out;
  pointer-events:none;
  ${MusicBarBox}:hover & {
    height: 81px;
  }
`;
const Left = styled.div`
  width :300px;
  height:100%;
  margin-left:18px;
  display:flex;
  align-items:center;
  @media (max-width: 600px) {
    width:100px;
  }
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
  max-width:130px;
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
  height: 15px;
  line-height: 1.25em;
  color: #dfdfdf;
  letter-spacing:0.5px;
  overflow:hidden;
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
cursor: pointer;
  &::after{
    ${fullIcon};
    background-position: ${props=>props.curr ? "-349px -471px":"-440px -627px"};
    background-position: ${props=>{if(props.like){return "-530px -627px"}}};
    height:22px;
    width:22px;
    transition:width 1s ease-in-out;
    @media (max-width: 600px) {
    width:0px;
  }
  }
`;

const Lyrics = styled.div`
cursor: pointer;
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

const ModalPosition = styled.div`
    position: fixed;
    background-color: rgba(25,25,25,.80);
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    display: ${props=>props.display? "flex" : "none"};
    align-items:center;
    justify-content:center;

`;

const ModalInner = styled.div`
    opacity: 1;
    position:relative;
    /* transition: opacity 0.4s ease-in-out; */
     width:500px;
     height:500px;
     
     background-color: #fff;
     /* transition: all .2s ease; */
     box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
     border-radius:6px;
    display: ${props=>props.display? "flex" : "none"};
    flex-direction: column;
    /* vertical-align: middle; */

`
const Close = styled.div`
cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding-top:10px;
    padding-right: 7%;
    cursor: pointer;
    &::after {
      ${fullIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 14px;
      height: 14px;
      margin-top: 10px;
      background-position: -387px -661px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      background-color:white;
    }

`


const ModalImage = styled.div`
    width:100%;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    .Mimg{
        width:80px;
        height:80px;
    }

`
const ModalTitle = styled.div`
    padding-top:5%;
    padding-left:5%;
    width:100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.5;

`


const ModalText = styled.div`
    width:100;
    right:0;
    color: #666;
    text-align: left;
    font-size:14px;
    line-height: 22px;
    padding: 5% 5%;
    padding-right:50%;
    overflow-y: scroll; 
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #141414;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 5px;
    }

`

const More = styled.div`
cursor: pointer;
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

const LikeInner = styled.div`
  position:absolute;
    padding: 12px 0;
    bottom:60px;
    display: ${props=>props.display? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    font-size:14px;
    background-color: #fff;
    z-index:9999;
     /* transition: all .2s ease; */
     box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
     border-radius: 4px;
     width:200px;
     height:200px;
 `
 const Title = styled.div`
 cursor: pointer;
    padding: 5px 20px;
    margin-bottom: 7px;
    width: 100%;
    &:hover{
        background-color: #f3f3f3;
    }

`
const LikeImage = styled.div`
cursor: pointer;
    display:flex;
    flex-direction:row;
    &:hover{
        background-color: #f3f3f3;
    }

`

const ImageTitle = styled.div`
cursor: pointer;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.4;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Iname = styled.div`
cursor: pointer;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;

`
const Ivocal = styled.div`
cursor: pointer;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    color: #999;
    font-size: 13px;
`

const Likey = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Joayo = styled.div`
    cursor: pointer;

`


const MyList = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`
const List = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Share = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

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
      background-position: ${props=> props.playing ? "-420px -347px" : "-597px -128px"};
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
  @media (max-width: 1200px) {
    display:none;
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
@media (max-width: 1200px) {
  display:none;
  }
`;

const Right = styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const Time = styled.div`
  font:10px;
  color:white;
  height:14px;
  width:78px;
  display:flex;
  align-items:center;
  margin-right:20px;
  padding-top:2px;
  transition: opacity .5s ease-in-out;
  @media (max-width: 1260px) {
    opacity:0;
  }
  @media (max-width: 780px) {
    display:none;
  }
`;

const TimeLeft = styled.div`
  color: rgb(116, 116, 116);
  font-size: 12px;
  line-height: 14px;
  margin-right:3px;
  
`;

const TimeRight = styled.div`
  color: rgb(188, 188, 188);
  font-size: 12px;
  line-height: 14px;
`;

const Volume = styled.div`
  height:5px;
  display:flex;
  align-items:center;
  pointer-events:auto;
  margin-right: 10px;
  @media (max-width: 780px) {
    display:none;
  }
`;

const VolumeBarBox = styled.div`
  width: 100px;
  height: 3px;
  margin: 0 5px;
  border-radius:10px;
  cursor: pointer;
  /* transition:all 0.5s ease-in-out; */
  background-color: #4b4b4b;
  &:hover{
    height: 5px;
  }
  ${Volume}:hover &{
    height: 5px;
  }
  @media (max-width: 780px) {
    display:none;
  }
`;

const VolumeIcon = styled.div`
    ${fullIcon};
    background-position: ${props=> props.mute? "-718px -354px": "-718px -461px"};
    width: 17px;
    height: 13px;
    &:hover{
      background-position: ${props=> props.mute? "-718px -419px": "-718px -440px"};
    }
    ${ Volume }:hover &{
      background-position: ${props=> props.mute? "-718px -419px": "-718px -440px"};
    }
    @media (max-width: 780px) {
    display:none;
  }
`;
  const VolumeBarValue = styled.div`
    height:100%;
    width:${props=>props.vWidth}%;
    border-radius:10px;
    cursor: pointer;
    background-color:rgb(120, 120, 120);
    &:hover{
      background-color: rgb(255, 255, 255);
    }
    ${ Volume }:hover &{
      background-color: rgb(255, 255, 255);
    }
    @media (max-width: 780px) {
    display:none;
  }
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
