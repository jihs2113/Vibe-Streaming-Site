import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SelectedList from './SelectedList';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';


function TopChart () {

  const [ musicState, setMusicState ] = useState([]);
  

  useEffect(() => {

    fetch("/jh_data/jh.json")
    .then((res) => res.json())
   
    .then((res) => setMusicState(res.data));

    setMusicState(
      musicState.map((d) => {
        return{
          id: d.id,
          album: d.album,
          img: d.m_url,
          name: d.name,
          vocal: d.vocal,
          "select":false,
        };
      })
    );
    setMusicState(musicState);

   
  }, []);

 
  return (
    
    <>
      <div className="container">
        <table style={{width: "100%"}}>
         
          <SelectedList/>
        </table>
      </div>
    </>
    
  );
}



export default withRouter(TopChart);