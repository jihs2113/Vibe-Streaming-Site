import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom';
import styled, {css} from 'styled-components';
import icon from '../../Images/vibe.png';
// import SideNav from '../../Components/SideNav/SideNav';
import GoVideo from './GoVideo';




function VideoChart() {

    const [ linkState, setLinkState] = useState([]);
    const [ slideState, setSlideState ] = useState(0);
    const [ musicState, setMusicState ] = useState([]);
    const [ videoState, setVideoState ] = useState([]);

    useEffect(() => {
        fetch("/jh_data/jh.json")
        .then((res) => res.json())
        .then((res) => setVideoState(res.data));
    }, []);
  
    const Pleft = () =>{
        if(slideState==0){
            return;
        }
        setSlideState(slideState+900);
    }
    const Pright = () =>{
        if(slideState==-2700){
            return;
        }
      setSlideState(slideState-900);
    }

    return (
        <>
        <Container>
            <Content>
                <List>
                    <button className="left" onClick={()=>Pleft()}></button>
                    <button id="right" onClick={()=>Pright()}></button>
                    <h3 style={{display: "flex", alignItems: "flex-start" }}>
                        <GoList>&emsp;뮤직 비디오 Top 50</GoList>
                    </h3>
                    <Camp slideState={slideState}>
                      
                        {videoState.map((music, i)=>(
                            <GoVideo
                                id={music.id}
                                img={music.m_url}
                                name={music.name}
                                vocal={music.vocal}
                              
                            />
                        ))}
                        
                    </Camp>
                </List>
            </Content>
        </Container>

        </>
    )
}


const beforeIcon = css`
display: block;
content: "";
background: url(${icon}) no-repeat;
`;

const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

const Container = styled.div`
  margin-left:20px;
  margin-bottom:20px;
 
  height: 100%;
  background-color: #fbfbfb;

`

const Content = styled.div`
      /* max-width: 1273px; */
      position: relative;
      width: 100%;
      background-color:  #fbfbfb;
      overflow:hidden;
      
`

const List = styled.div`
    padding: 50px 0 0 35px;
    /* max-width: 1273px; */
    position: relative;
    width: 100%;
    height: 380px;
    .left{
    width:40px;
    height:40px;
    position: absolute;

    top: 50%;
    z-index:1;
    border-radius:50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    &::after {
        ${afterIcon}
        top: 30px;
        bottom: 0;
        left: 46px;
        background-position: -426px -661px;
        width: 10px;
        height: 14px;
        margin: 5px 0 0 0;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;

    }
}
    #right{
        width:40px;
        height:40px;
        position: absolute;
        top: 50%;
        right: 4%;
        z-index:1;
        border-radius:50%;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
        &::after {
        ${afterIcon}
        top: 30px;
        bottom: 0;
        left: 46px;
        background-position: -43px -717px;
        width: 10px;
        height: 14px;
        margin: 5px 0 0 0;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;
        }    
    
    }
   
`

const GoList = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      background-position: -718px -375px;
      width: 9px;
      height: 17px;
      margin: 0 0 0 5px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      
    }

`

const Camp = styled.div`
    padding: 50px 0 0 30px;
    /* max-width:1270px; */
    height:430px;
    /* margin: 0 auto; */
    display:flex;
    align-items: center;
    /* display: block; */
    /* overflow-x: hidden; */
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;

    position: absolute;
    /* width: 100%; */
    left: ${props => (props.slideState-38)}px;
    transition: left ease-out 0.4s;

    /* justify-content:flex-start; */
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    flex-wrap:wrap;
    width:100%;
  /* max-width: 1270px; */

`


export default withRouter(VideoChart);
