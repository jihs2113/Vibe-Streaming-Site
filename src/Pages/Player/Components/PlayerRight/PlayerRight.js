import React, {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import icon from '../../../../Images/vibe.png';
import { connect } from "react-redux";
import { shuffle,  setSongInfo, setRepeatIndex } from "../../../../store/actions";

function PlayerRight ({popup,shuffleIndex,shuffle,setSongInfo,setRepeatIndex, repeatIndex}) {
  const [music, setMusic] = useState({});
  const [current, setCurrent] = useState();
  const id = useRef(null);
  const [standardY, setStandardY] = useState();
  useEffect(() => {
    axios({url: 'http://localhost:3000/galbi_data/galbi.json'}).then(res=>{
      setMusic(res.data.music);
      setSongInfo(res.data.music[0]);
    });
  }, []);

  const removeSong = (index)=>{
    let tmp = [...music];
    tmp.splice(index,1);
    setMusic(tmp);
  }

  function onDragStart(e){

    const target = e.target;
    console.log(target);
    e.dataTransfer.setData('text', target.id);
    setCurrent(target.id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move"
    setStandardY(e.clientY);
  }
  function onDragEnd(e){
    const target = e.target;
    setTimeout(()=>{target.style.opacity = '1'},0);
    const tmpSong = music[current];
    let tmpMusic = [...music];
    tmpMusic[current] = tmpSong;
    setMusic(tmpMusic);
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
    const tmpSong = music[current];
    console.log("tmpSong",tmpSong);
    let tmpMusic = [...music];
    tmpMusic[current] = tmpMusic[Over.id];
    setTimeout(()=>{Over.style.opacity = '1'},0);
    tmpMusic[Over.id] = tmpSong;
    setMusic(tmpMusic);
    setCurrent(Over.id);
    e.dataTransfer.dropEffect = "move";
    }
  }

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
        {music[0] && music.map((musicElement,i) => {
          if(Number(current) === i){
            return(<Element></Element>)
          }else{
          return(  
            <Element id={i} onClick={()=>setSongInfo(music[i])} draggable onDragOver={(event)=>onDragOver(event)} onDragStart={(event)=>onDragStart(event)} onDragEnd={(event)=>onDragEnd(event)} >
            <SmallImg src={musicElement.urlSmall} />
            <Text>
              <TextTop>
                {musicElement.title}
              </TextTop>
              <TextBottom>
                {musicElement.artist}
              </TextBottom>
            </Text>
            <DeleteIcon onClick={() => removeSong(i)} />
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
    repeatIndex: state.repeatIndex
  };
};

export default connect(mapStateToProps,{ shuffle, setSongInfo, setRepeatIndex })(PlayerRight);

const fullIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const PlayerRightTag = styled.div`
  position: absolute;
  top: ${props=>props.popup? '0' : '1000vh'};
  opacity:${props=>props.popup? '1' : '0'};
  right: 0;
  bottom: 81px;
  width: 350px;
  background-color: #141414;
  transition: all 1s ease-in-out;
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