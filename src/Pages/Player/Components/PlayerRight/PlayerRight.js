import React, {useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import icon from '../../../../Images/vibe.png';

function ListElement ({urlSmall,title,artist}){
  return <Element>
    <SmallImg src={urlSmall} />
    <Text>
      <div>
        {title}
      </div>
      <div>
        {artist}
      </div>
    </Text>
  </Element>
}

function PlayerRight ({show,setMainImg}) {
  const [music, setMusic] = useState({});
  useEffect(() => {
    axios({url: 'http://localhost:3000/galbi_data/galbi.json'}).then(res=>{
      setMusic(res.data.music);
    });
  }, []);

  const fullIcon = css`
  display: block;
  content: “”;
  background: url(${icon}) no-repeat;
`;

  return (
    <PlayerRightTag show={show}>
      <ListHeader>
        <div>이어지는 노래</div>
        
      </ListHeader>
      <List>
        {music[0] && music.map(musicElement=>{return(  
          <Element>
            <SmallImg src={musicElement.urlSmall} />
            <Text>
              <div>
                {musicElement.title}
              </div>
              <div>
                {musicElement.artist}
              </div>
            </Text>
            <Delete>
              X
            </Delete>
          </Element> 
        )})}
      </List>
    </PlayerRightTag>
  )
};

export default PlayerRight

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
  width:100%;
  height:19px;
  margin:26px 20px 20px;
  font-size: 15px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
`;

const List = styled.ul`
  width:100%;
  height:100%;
  overflow:scroll;
`;

const Element = styled.li`
  width:100%;
  height: 56px;
  padding:8px;
  display:flex;
`;

const SmallImg = styled.img`
  height:40px;
  width:40px;
`;

const Text = styled.div`
  margin-left: 10px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  color:white;
  height: 100%;
  width:100%;
`;
const Delete = styled.div`
  height:40px;
  width:40px;
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:30px;
`;
const Shuffle = styled.div`
  
`;