import React, {useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import icon from '../../../../Images/vibe.png';

function PlayerRight ({show,setMainImg}) {
  const [music, setMusic] = useState({});
  useEffect(() => {
    axios({url: 'http://localhost:3000/galbi_data/galbi.json'}).then(res=>{
      setMusic(res.data.music);
      setMainImg(res.data.music[0].urlLarge);
    });
  }, []);

  const removeSong = (index)=>{
    let tmp = [...music];
    tmp.splice(index,1);
    setMusic(tmp);
  }

  function ListElement (urlSmall,title,artist,removeSong,i){
    return (
      <Element draggable='true'>
        <SmallImg src={urlSmall} />
        <Text>
          <TextTop>
            {title}
          </TextTop>
          <TextBottom>
            {artist}
          </TextBottom>
        </Text>
        <DeleteIcon onClick={()=>removeSong(i)} />
      </Element> 
    )
  }

  return (
    <PlayerRightTag show={show}>
      <ListHeader>
        <div>이어지는 노래</div>
        <Flex>
          <ShuffleIcon />
          <LoopIcon />
        </Flex>
        
      </ListHeader>
      <List>
        {music[0] && music.map((musicElement,i)=>{return(  
          ListElement(musicElement.urlSmall,musicElement.title,musicElement.artist,removeSong,i)
        )})}
      </List>
    </PlayerRightTag>
  )
};

export default PlayerRight

const fullIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const PlayerRightTag = styled.div`
  position: absolute;
  top: ${props=>props.show? '0' : '1000vh'};
  opacity:${props=>props.show? '1' : '0'};
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
`;

const SmallImg = styled.img`
  height:40px;
  width:40px;
`;

const Text = styled.div`
  margin-left: 14px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  color:white;
  height: 100%;
  width:100%;
`;

const TextTop = styled.div`
  font-size: 14px;
  line-height: 1.25em;
  color: #dfdfdf;
  letter-spacing:0.5px;
`;

const TextBottom = styled.div`
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
    background-position: -560px -627px;
    width: 22px;
    height: 22px;
    }
`;

const LoopIcon = styled.div`
height:100%;
  &::after {
    ${fullIcon};
    background-position: -650px -627px;
    width: 22px;
    height: 22px;
    }
`;

const DeleteIcon = styled.div`
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