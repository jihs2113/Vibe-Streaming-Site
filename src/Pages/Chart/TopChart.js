import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SelectedList from './SelectedList';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';

function TopChart () {
  const [ musicState, setMusicState ] = useState([]);
  const [snt, setSnt] = useState([]);
  useEffect(() => {
    fetch("http://10.58.1.88:8000/music/chart")
    .then((res) => res.json())
    .then((res) => setMusicState(res.data));
    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       id: d.id,
    //       album: d.album,
    //       img: d.m_url,
    //       name: d.name,
    //       vocal: d.vocal,
    //       select:false,
    //     };
    //   })
    // );
    // setMusicState(musicState);
  }, []);
  
  // useEffect(() => {
  //   fetch("/jh_data/jh.json")
  //   .then((res) => res.json())
  //   .then((res) => setMusicState(res.data));
  //   setMusicState(
  //     musicState.map((d) => {
  //       return{
  //         id: d.id,
  //         album: d.album,
  //         img: d.m_url,
  //         name: d.name,
  //         vocal: d.vocal,
  //         "select":false,
  //       };
  //     })
  //   );
  //   setMusicState(musicState);
  // }, []);
  
  const CountChange = (id)=>{
    setSnt(snt => [...snt, id])
  }
  console.log("sibal",snt)
  return (
      <div className="container">
        <Table> 
          { musicState.map((music, i) => (
            <SelectedList
              id={music.id}
              img={music.image_url}
              name={music.name}
              artist={music.artist}
              album={music.album}
              list={music.lyrics}
              select={music.select}
            />


          ))}
          
        </Table>
      </div>
  );
}

const Table = styled.div`
 width:100%;

`

export default withRouter(TopChart);