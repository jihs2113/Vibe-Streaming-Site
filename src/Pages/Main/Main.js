import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import SideNav from '../../Components/SideNav/SideNav';
import MainChart from '../Chart/MainChart';


function Main () {
  return (
    <Body>
            <SideNav/>
            <MainNav>
                <Container>
                    <Header>
                      <video
                        autoPlay
                        loop
                        muted
                        src="https://vibe.naver.com/media/wheresmymoney_top_m.d88dffd9.mp4"
                        type="video/mp4"
                        className="Video">

                      </video>
                      <div className="Title">
                        
                        <span><img src="https://vibe.naver.com/img/00_logo.2e9ff730.svg" alt=""/></span>
                        <span><img src="https://vibe.naver.com/img/00_title.9ceedf86.svg" alt=""/></span>
                        <span><img style={{marginTop:"20px"}}
                        src="https://vibe.naver.com/img/06_title.b88c95e6.svg" alt=""/></span>
                      </div>
                     </Header>
                    <Content>
                        <MainChart/>
                    
                    </Content>
                    <Content>

                        <span>asdads</span>
                    </Content>
                    <Content>

                        <span>asdads</span>
                    </Content>
                </Container>
            </MainNav>
    </Body>
    
    
  )
}

// const Header = styled.div`
//         bottom: 81px;
//         left: 0;
//         width: 225px;
//         background-color: black;
//         position: fixed;
//         top: 0;
//         z-index: 10100;
// `

const Body = styled.div`
    width:100vw;
    height: 100vh;

`

const MainNav = styled.div`
        padding-bottom: 467px;
        width:100%;
        height: 100vh;
        /* margin-left: 10%; */
        background-color: #fbfbfb;


`

const Container = styled.div`
            max-width: 1273px;
            position: relative;
            width: 100%;
            height:100vh;
            margin-left: 250px;

`
const Header = styled.div`
      width:100%;
      height:400px;
      margin: 0 0 30px 0;
      position: relative;
      overflow: hidden;
      z-index: 50;
      background-color: #000;
      text-align: center; 
      
     
      position:relative;
      .Video{
        
        top: 0;
        left: 0;
        transform: translateX(30%);
        width: auto;
        height: 100%;
        position: absolute;
      }
      .Title{
        position: absolute;
        top: 20px;
        left: 40%;
        z-index: 10;
        width: 200px;
        height: 72px;
        /* margin-left: -86.5px;
        background: url(../img/00_logo.2e9ff730.svg) no-repeat 0 0;
        background-size: 100%; */
        span{
          color:white;
        }
      }

` 
    

const Content = styled.div`
      width:100%;
      height:400px;
      margin: 12px 0 20px 30px;
     

`



export default withRouter(Main);