import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import TopChart from './TopChart';

function Chart () {
  let date = new Date();
  let day = date.getDate();
  const [time] = useState([day]);
  // const [scrollState , setScrollState] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const isTop = window.scrollY <100 ;
  //     if(isTop !==true) {
  //       setScrollState({scrollState: true});
  //     } else {
  //       setScrollState({scrollState: false});
  //     }

  //   });

  // }, []);
  const useScroll = () => {
    // state를 생성합니다.
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    // scrll의 값을 가져와 state를 갱신합니다.
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다 
      // onScroll 함수가 실행됩니다.
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll); 
    }, []);
    return state;
  };
  const { y } = useScroll();

    return ( 
      
      <>
        <Nav style={{opacity: y> 80 ? "1" : "0"}}>
          <Bar>
            <Topic>오늘 Top 100</Topic>
            <TopicPlay>
              <PlayAll>
                  <SelectAll>전체재생</SelectAll>
              </PlayAll>
              <PlaySelect>
                  <RanPlay>랜덤재생</RanPlay>
              </PlaySelect>
            </TopicPlay>
          </Bar>
        </Nav>
        <Header>

        </Header>
        <Container>
          <Content>
            <Title>오늘 Top 100</Title>
            <Time>6월 {time}일 오전 7시 업데이트</Time>
            <PlayLine>
              <ToPlay>
                <PlayAll>
                  <SelectAll>전체재생</SelectAll>
                </PlayAll>
              </ToPlay>
              <ToPlay>
                <PlaySelect>
                  <RanPlay>랜덤재생</RanPlay>
                </PlaySelect>
              </ToPlay>
              <More>
                <MoreDot>'''</MoreDot>
              </More>
            </PlayLine>
            <AddList>
              <StoPlay>
                <StoSelect>
                  <NextAdd>바로 다음에 추가</NextAdd>
                </StoSelect>
              </StoPlay>
              <StoPlay>
                <StoSelect>
                  <BottomAdd>맨 아래에 추가</BottomAdd>
                </StoSelect>
              </StoPlay>
            </AddList>
            <TrackList>
              <TopChart/>
            </TrackList>
          </Content>
        </Container>
      </>
     )
  }

  const Bar = styled.div`
  margin: 13px 38px 13px 43px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

  const Nav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 225px;
    z-index: 30;
    background-color: hsla(0,0%,95.3%,.94);


`
  const Topic = styled.div`
    font-size: 18px;
    line-height: 42px;
    font-weight: 600;
    color: #232323;
`
  const TopicPlay = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  margin-right: 70px;
`

  const Header = styled.div`
  bottom: 81px;
  left: 0;
  width: 225px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10100;
`
const Container = styled.div`
  padding-bottom: 467px;
  min-height: 600px;
  padding-left: 225px;
  background-color: #fbfbfb;


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
const Time = styled.div`
      margin: 7px 0 20px;
      font-size: 13px;
      line-height: 16px;
      color: #999;

`

const PlayLine = styled.div`
      display: flex;
      flex-direction: row;

`

const ToPlay = styled.div`
    padding-right: 10px;

`

const PlayAll = styled.button`
    width: 134px;
    background-color: #ff1150;
    border: 1px solid #ff1150;
    border-radius: 4px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 30px;
`

const SelectAll = styled.div`
   color: #fff;
   font-size: 15px;
   font-weight: 400;

`

const PlaySelect = styled.button`
  width: 134px;
  border: 1px solid #d7d7d7;
  background-color: #fbfbfb;
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 30px;
`
const RanPlay = styled.div`
  color: #232323;
  font-size: 15px;
  font-weight: 400;

`
const More = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;

`

const MoreDot = styled.div`
  font-size: 13px;
`

const AddList = styled.div`
   margin-top: 30px;
   margin-left: -5px;
   padding-top: 15px;
   border-top: 1px solid #e4e4e4;
   display: flex;
   flex-direction: row;

`

const StoPlay = styled.div`
  padding-right: 10px;
  align-items: center;
  display: flex;

`

const StoSelect = styled.button`
  margin: 0 5px;
  padding: 9px 12px 11px 18px;
  width: 134px;
  border: 1px solid #d7d7d7;
  background-color: #fbfbfb;
  border-radius: 4px;
  height: 36px;

`

const NextAdd = styled.div`
 color: #232323;
 font-size: 13px;
 font-weight: 400;

`

const BottomAdd = styled.div`
  color: #232323;
  font-size: 13px;
  font-weight: 400;
`

const TrackList = styled.div`
  width: 100%;
  height: 100%;

`

export default withRouter(Chart);
