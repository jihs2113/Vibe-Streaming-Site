import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom';
import styled, {css} from 'styled-components';
import icon from '../../Images/vibe.png';
import SideNav from '../../Components/SideNav/SideNav';
import GoChart from './GoChart';




function MainChart(props) {

    const [linkState, setLinkState] = useState([]);

    const HandleLink = () =>{
        props.history.push("Chart");
    }


    return (
        <>
       
        <SideNav/>
        <Container>
            <Content>
                <Title>차트</Title>
                <List>
                    <h3 style={{display: "flex", alignItems: "flex-start" }}>
                        <GoList onClick={()=>HandleLink()}>오늘 Top 100</GoList>
                    </h3>
                    <Camp>

                        <GoChart/>

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
  padding-bottom: 467px;
  height: 100vh;
  padding-left: 225px;
  background-color: white;

`

const Content = styled.div`
      max-width: 1273px;
      position: relative;
      width: 964px;
      margin-left: 12%;
      margin-top: 5%;
      background-color: white;
      
`
const Title = styled.div`
      color: black;
      font-size: 30px;
      font-weight: 600;
`
const List = styled.div`
    padding: 18px 0;
    max-width: 1273px;
    position: relative;
    width: 964px;
    height: 380px;
    
   
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
    padding: 18px 0;
    width:860px;
    height:380px;
    /* margin: 0 auto; */
    display:flex;
    align-items: column;
    /* display: block; */
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
`

export default withRouter(MainChart);
