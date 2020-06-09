import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SelectedList from './SelectedList';
import styled from 'styled-components';


function TopChart () {

  const [ musicState, setMusicState ] = useState([]);
  

  useEffect(() => {

    fetch("/jh_data/jh.json")
    .then((res) => res.json())
    // .then((res) => console.log(res.data[0].album));
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

    // let musicState = [
    //   {id: 1 , pic: "https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228",
    //    firstname: "에잇", lastname: "아이유(IU)", major: "에잇"},
    //   {id: 2 , pic: "https://musicmeta-phinf.pstatic.net/album/004/498/4498641.jpg?type=r100Fll&v=20200327115935",
    //   firstname: "아로하", lastname: "조정석", major: "슬기로운 의사생활"},
    //   {id: 3 , pic: "https://musicmeta-phinf.pstatic.net/album/004/574/4574324.jpg?type=r100Fll&v=20200522115942", 
    //   firstname: "사랑하게 될 줄 알았어", lastname: "전미도", major: "슬기로운 의사생활"}


    // ];
    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       "select":false,
    //       id: d.id, 
    //       firstname:d.firstname,
    //       lastname:d.lastname,
    //       major:d.major
    //     };
    //   })
    // );
    // setMusicState(musicState);

    // fetch("/jh_data/jh.json")
    // .then((res) => res.json())
    // .then((res) => this.setState({data: res.data}));
  }, []);

  
  return (
    
    <>
      <div className="container">
        <table>
         
          <SelectedList/>
        </table>
      </div>
    </>
    
  );
}



export default withRouter(TopChart);