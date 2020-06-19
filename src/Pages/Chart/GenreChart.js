import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom';
import styled, {css} from 'styled-components';
import icon from '../../Images/vibe.png';
// import SideNav from '../../Components/SideNav/SideNav';
import GoVideo from './GoVideo';




function VideoChart() {

    const [ linkState, setLinkState] = useState([]);
    const [ slideState, setSlideState ] = useState(0);

    
    // const HandleLink = () =>{
    //     props.history.push("Chart");
    // }

    const genres = ["국내 인디", "국내 포크/어쿠스틱", "K-Pop", "국내 발라드", "국내 댄스", "국내 일렉트로닉", "국내 힙합", "국내 알앤비,소울", "국내 락/메탈", "국내 재즈", "트로트", "Pop","해외 댄스", "해외 일렉트로닉", "해외 힙합", "해외 댄스", "해외 일렉트로닉", "해외 힙합", "해외 알앤비/소울", "해외 락/메탈", "해외 재즈", "해외 인디", "해외 포크/어쿠스틱", "OST", "클래식", "뉴에이지/연주곡", "J-Pop", "CCM"];

    const Pleft = () =>{
        if(slideState==0){
            return;
        }
        setSlideState(slideState+944);

    }
  
    const Pright = () =>{
        if(slideState==-2700){
            return;
        }
      setSlideState(slideState-944);
      
  
    }

    return (
        <>
       
        {/* <SideNav/> */}
        <Container>
            <Content>
                {/* <Title>차트</Title> */}
                <List>
                    <button className="left" onClick={()=>Pleft()}></button>
                    <button id="right" onClick={()=>Pright()}></button>
                    <h3 style={{display: "flex", alignItems: "flex-start" }}>
                        <GoList>&emsp;장르 바로가기</GoList>
                    </h3>
                    <Camp slideState={slideState}>
                        {genres.map((genre, i)=>(
                            <GenreTag>
                                <span>
                                {genre}
                                </span>
                            </GenreTag>
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

const GenreTag = styled.div`
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    vertical-align: middle;
    word-break: keep-all;
    color: #232323;
    text-align: center;
    height: 60px;
    width:180px;
    margin: 10px 5.8px;
    padding: 0 13px;
    color: #232323;
    text-align: center;
    border-radius: 4px;
    background-color: #ececec;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Container = styled.div`
  margin-left:20px;
  margin-bottom:20px;
 

  background-color: white;

`

const Content = styled.div`
      /* max-width: 1273px; */
      position: relative;
      width: 100%;
      background-color: white;
      overflow:hidden;
      
`
// const Title = styled.div`
//       color: black;
//       font-size: 30px;
//       font-weight: 600;
// `
const List = styled.div`
    padding: 0 0 0 35px;
    /* max-width: 1273px; */
    position: relative;
    width: 100%;
    height: 330px;
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
    padding-top:30px;
    margin-bottom:-20px;
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
    padding: 30px 0 0 30px;
    /* max-width:1270px; */
    height:330px;
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
