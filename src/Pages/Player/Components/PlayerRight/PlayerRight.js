import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import icon from '../../../../Images/vibe.png';
import { connect } from "react-redux";
import url from "../../../../config";
import { shuffle,  setSongInfo, setRepeatIndex, setSongList, setSongIndex } from "../../../../store/actions";

function PlayerRight ({popup,shuffleIndex,shuffle,setSongInfo, setSongIndex, setRepeatIndex, repeatIndex, setSongList, songList}) {
  const [current, setCurrent] = useState();
  const id = useRef(null);
  const [standardY, setStandardY] = useState();
  const [songArray, setSongArray] = useState();
  useEffect(() => {
    fetch(`${url}/music/playlist`, {
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
    }).then(res=>res.json()).then(res=>{ 
      setSongList(res.music);
      setSongInfo(res.music[0]);
    });
  }, []);

  const removeSong = (index)=>{
    let id = songList[index].id;
    let tmp = [...songList];
    tmp.splice(index,1);
    setSongList(tmp);
    fetch(`${url}/music/playlist`, {
      method: "DELETE",
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: id,
      }),
    });
  }

  function onDragStart(e){
    const target = e.target;
    e.dataTransfer.setData('text', target.id);
    setCurrent(target.id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move"
    setStandardY(e.clientY);
  }
  function onDragEnd(e){
    const target = e.target;
    setTimeout(()=>{target.style.opacity = '1'},0);
    const tmpSong = songList[current];
    let tmpMusic = [...songList];
    tmpMusic[current] = tmpSong;
    setSongList(tmpMusic);
    setCurrent("-1000");
  }

  function onDragOver(e){
    e.stopPropagation();
    e.preventDefault();
    if(Math.abs(e.clientY-standardY)>40){
    setStandardY(e.clientY);
    const Over = e.target;
    if(Over===current){
      return;
    }
    const tmpSong = songList[current];
    let tmpMusic = [...songList];
    tmpMusic[current] = tmpMusic[Over.id];
    setTimeout(()=>{Over.style.opacity = '1'},0);
    tmpMusic[Over.id] = tmpSong;
    setSongList(tmpMusic);
    setCurrent(Over.id);
    e.dataTransfer.dropEffect = "move";
    }
  }
  const [goto,setGoto]=useState(false);

  const clickElement = (i) => {
    setSongInfo(songList[i]);
    setSongIndex(i);
  };

  useEffect(()=>{
    if(shuffleIndex==="-470px -627px"){
      let tmp = [...songList];
      for(let i = tmp.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = tmp[i]
        tmp[i] = tmp[j]
        tmp[j] = temp
      }
      setSongArray(tmp);
    }else{
      setSongArray(songList);
    }
  },[songList, shuffleIndex]);

  return (
    <PlayerRightTag popup={popup}>
      <ListHeader>
        <div>이어지는 노래</div>
        <Flex>
          <ShuffleIcon shuffleIndex={shuffleIndex} onClick = {()=>shuffle()}/>
          <LoopIcon repeatIndex={repeatIndex} onClick = {()=>setRepeatIndex(repeatIndex)} />
        </Flex>
        
      </ListHeader>
      <List >
        {songArray && songArray.map((musicElement,i) => {
          if(Number(current) === i){
            return(<Element></Element>)
          }else{
          return(  
            <Element key={i} draggable onClick={!goto ? (()=>clickElement(i)): (()=>{})} onDragOver={(event)=>onDragOver(event)} onDragStart={(event)=>onDragStart(event)} onDragEnd={(event)=>onDragEnd(event)} >
              <SmallImg src={musicElement.urlSmall}/>
              <Text>
                <TextTop >
                  {musicElement.title}
                </TextTop>
                <TextBottom >
                  {musicElement.artist}
                </TextBottom>
              </Text>
              <DeleteIcon onMouseEnter={()=>setGoto(true)} onMouseLeave={()=>setGoto(false)} onClick={() => removeSong(i)} />
            </Element>
        )}})}
      </List>
    </PlayerRightTag>
  )
};

const mapStateToProps = (state) => {
  return{
    shuffleIndex: state.shuffleIndex,
    popup: state.popup,
    repeatIndex: state.repeatIndex,
    songList: state.songList
  };
};

export default connect(mapStateToProps,{ shuffle, setSongInfo, setRepeatIndex, setSongList, setSongIndex })(PlayerRight);

const fullIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const PlayerRightTag = styled.div`
  position: fixed;
  height: ${props=>!props.popup? '0' : '100%'};
  /* opacity:${props=>props.popup? '1' : '0'}; */
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: #141414;
  transition: all 0.2s ease-in-out;
  z-index:9999;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const ListHeader = styled.div`
  height:19px;
  margin:27px 20px 16px;
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  color: #fff;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

const List = styled.ul`
  width:100%;
  height:100%;
  overflow:scroll;
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
`;

const Element = styled.li`
  pointer-events:auto;
  cursor: move;
  background-color: #141414;
  width:100%;
  height: 56px;
  padding:8px;
  padding-left: 20px;
  display:flex;
  align-items:center;
  &:hover{
    background-color:#272727;
  }
  &:active{
    cursor:grab !important;
    cursor: url('https://www.google.com/intl/en_ALL/mapfiles/closedhand.cur'), all-scroll;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: -ms-grabbing;
  cursor: grabbing;
  background-color: #141414;
  }
`;

const SmallImg = styled.img`
  pointer-events:none;
  height:40px;
  width:40px;
  position: relative;
  /* &::before{
    position:absolute;
    width:40px;
    height:40px;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:black;
  } */
`;

const Text = styled.div`
pointer-events:none;
  margin-left: 14px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  color:white;
  height: 100%;
  width:100%;
`;

const TextTop = styled.div`
pointer-events:none;
width:200px;
  font-size: 14px;
  line-height: 1.25em;
  color: #dfdfdf;
  letter-spacing:0.5px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
`;

const TextBottom = styled.div`
pointer-events:none;
width:220px;
  font-size: 13px;
  line-height: 17px;
  color: #737373;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
`;

const Flex = styled.div`
  display:flex;
  width:72px;
  justify-content:space-around;
  margin-right:-7px;
`;

const ShuffleIcon = styled.div`
height:100%;
  &::after {
    ${fullIcon};
    background-position: ${props=>props.shuffleIndex};
    width: 22px;
    height: 22px;
    }
`;

const LoopIcon = styled.div`
height:100%;
  &::after {
    ${fullIcon};
    background-position: ${props=>props.repeatIndex};
    width: 22px;
    height: 22px;
    }
`;

const DeleteIcon = styled.div`
/* pointer-events:none; */
cursor:pointer;
margin-right:10px;
opacity:0.3;
  &::after {
    ${fullIcon};
    background-position: -290px -627px;
    width: 22px;
    height: 22px;
    }
  ${Element}:hover & {
    opacity:1;
  }
`;