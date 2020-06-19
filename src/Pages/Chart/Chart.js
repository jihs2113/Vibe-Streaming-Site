import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';
import TopChart from './TopChart';
import { connect } from "react-redux";
import { setMKList } from "../../store/actions/index";
import ListModal from "./ListModal";

function Chart (props) {
  let date = new Date();
  let day = date.getDate();
  const [time] = useState([day]);

  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll); 
    }, []);
    return state;
  };
 
  const [modalState, setModalState]=useState(false);
  const [musicState, setMusicState] =useState([]);

  const Cmodal =()=>{
    setModalState(!modalState);
    // const token = localStorage.getItem('access_token');
    fetch(`http://10.58.0.37:8000/music/myplaylist`, {
      method: 'GET' ,  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs"
      },
    })
    .then((res) => res.json())
    .then((res) => setMusicState(res.data));
  }
  const CloseModal = (close) =>{
    
    setModalState(!modalState)
  }

  const { y } = useScroll();
 
    return ( 
      <>
         <Nav style={{opacity: y> 80 && props.mkList.length===0 ? "1" : "0"}}>
           <Bar>
             <Topic>오늘 Top 100</Topic>
             <TopicPlay>
               <PlayAll>
                   <SelectAll>전체재생</SelectAll>
               </PlayAll>
               <PlaySelect>
                   <RanPlay>랜덤재생</RanPlay>
               </PlaySelect>
               <More>
                 <MoreDot></MoreDot>
               </More>
             </TopicPlay>
           </Bar>
         </Nav>
        {/* style={{opacity: props.mkList.length >=1 ? "1" : "0"}} */}
        <Option style={{opacity: props.mkList.length >=1 ? "1" : "0"}}>
          <div className="AddNav">
            <div className="SelectBtn">
                <div className="Abtn">
                  <input type="checkbox"/>
                  <span>전체선택</span>
                  <span style={{fontWeight:600, color:"#ff1150"}}>{props.mkList.length}곡 선택</span>
                </div>
                <div className="CloseBtn" ></div>
            </div>
            <div className="ManyBtn">
                <div className="BtnWrap">
                    <span className="Next">
                      바로 다음에 추가
                    </span>
                    <span className="Bottom">
                      맨 아래에 추가
                    </span>
                    <span className="MyAdd" onClick={()=>Cmodal()}>
                      내 플레이리스트 추가
                    </span>
                    <span className="Buy">
                      MP3 구매
                    </span>
                </div>
                <button className="SelectPly">
                    <span className="PlyBtn">선택한 곡 재생</span>
                </button>
            </div>
          </div>
        </Option>
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
                <MoreDot></MoreDot>
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
                  <Tag className={`modalBackground modalShowing-${modalState}`}>
                  <ModalInner>
                    <Close onClick={() => Cmodal()}></Close>
                    <ModalText>
                        <span>
                            내 플레이리스트 추가                        
                        </span>
                    </ModalText>
                    { musicState.map((list, i) => (
                        <ListModal className="Lole"
                          // mod={modalState}
                          qauntity={list.qauntity}
                          name={list.name}
                          id={list.id}
                          CloseModal={CloseModal}
                          />
                          
                    ))}
                      </ModalInner> 
                  </Tag>
              <TopChart/>
            </TrackList>
          </Content>
        </Container>
      </>
     )
  }

  
const mapStateToProps = (state)=>{
  return{
    mkList : state.mkList
  };
};

export default connect(mapStateToProps,{ setMKList })(withRouter(Chart));


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

  const Bar = styled.div`
  /* margin: 13px 38px 13px 73px; */
  /* max-width: 1170px;  */
  width:964px;
  margin:0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* z-index:999999; */

`
const Option = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 250px;
    z-index: 99999;
    border-bottom: 1px solid #e4e4e4;
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
    .AddNav{
      position: relative;
      width: 964px;
      margin: 0 auto;
      .SelectBtn{
        display:flex;
        justify-content:space-between;
      
      .Abtn{
        padding: 19px 0 20px;
        border-bottom: 1px solid #e4e4e4;
        display:flex;
        flex-direction:row;
        input{
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-right: 6px;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          padding-right: 10px;
          font-size: 15px;
          line-height: 18px;
          color: #232323;
          vertical-align: middle;
        }
      }
        .CloseBtn{
          display: flex;
          justify-content: flex-end;
          padding-top:10px;
          padding-right: 2%;
          cursor: pointer;
          &::after {
            ${afterIcon}
            top: 30px;
            bottom: 0;
            left: 46px;
            width: 14px;
            height: 14px;
            margin-top: 10px;
            background-position: -387px -661px;
            transition: height 0.5s ease-in,opacity 0.5s ease-in;
            /* background-color:white; */
          }
        }
      }
    
      .ManyBtn{
        position: relative;
        margin-left: -10px;
        padding: 13px 0 12px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        .BtnWrap{
          display:flex;
          flex-direction:row;
          .Next{
            cursor: pointer;
            display: flex;
            margin: 2px;
            padding: 10px 8px 9px;
            font-size: 14px;
            line-height: 17px;
            color: #232323;
            vertical-align: top;
            &::before {
            ${beforeIcon}
            top: 30px;
            bottom: 0;
            left: 46px;
            background-position: -371px -439px;
            width: 16px;
            height: 16px;
            transition: height 0.5s ease-in,opacity 0.5s ease-in;
            }
          }
            .Bottom{
              cursor: pointer;
              display: flex;
              margin: 2px;
              padding: 10px 8px 9px;
              font-size: 14px;
              line-height: 17px;
              color: #232323;
              vertical-align: top;
              &::before {
                ${beforeIcon}
                top: 30px;
                bottom: 0;
                left: 46px;
                background-position: -718px -554px;
                width: 16px;
                height: 16px;
                transition: height 0.5s ease-in,opacity 0.5s ease-in;
              }
            }
            .MyAdd{
              cursor: pointer;
              display: flex;
              margin: 2px;
              padding: 10px 8px 9px;
              font-size: 14px;
              line-height: 17px;
              color: #232323;
              vertical-align: top;
              &::before {
              ${beforeIcon}
              top: 30px;
              bottom: 0;
              left: 46px;
              background-position: -419px -439px;
              width: 16px;
              height: 16px;
              transition: height 0.5s ease-in,opacity 0.5s ease-in;
            }
            }
            .Buy{
              cursor: pointer;
              display: flex;
              margin: 2px;
              padding: 10px 8px 9px;
              font-size: 14px;
              line-height: 17px;
              color: #232323;
              vertical-align: top;
              &::before {
              ${beforeIcon}
              top: 30px;
              bottom: 0;
              left: 46px;
              background-position: -281px -439px;
              width: 24px;
              height: 16px;
              transition: height 0.5s ease-in,opacity 0.5s ease-in;
            }
            }
          }
        }
        .SelectPly{
          width: 140px;
          background-color: #ff1150;
          border: 1px solid #ff1150;
          border-radius: 4px;
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 5px;
          .PlyBtn{
            color: #fff;
            font-size: 15px;
            font-weight: 400;
            display:flex;
            &::before {
                ${beforeIcon}
                top: 30px;
                bottom: 0;
                left: 46px;
                width: 19px;
                height: 20px;
                background-position: -592px -689px;
                transition: height 0.5s ease-in,opacity 0.5s ease-in;
              }
          }
        }
      }
    }

`


  const Nav = styled.div`
    position: fixed;
    /* max-width:1270px; */
    top: 0;
    right: 0;
    left: 250px;
    z-index: 999999;
    background-color: hsla(0,0%,95.3%,.94);
    padding-left: 7%;
    /* padding-right: 10%; */


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

const Container = styled.div`
  width:964px;
  margin:0 auto;
  /* padding-left: 225px; */
  background-color: white;

`

const Content = styled.div`
      max-width: 1273px;
      position: relative;
      width: 964px;
      /* margin-left: 12%; */
      margin-top: 5%;
      background-color: #fbfbfb;
      z-index:9999;
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
   display:flex;
   &::before {
      ${beforeIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 19px;
      height: 20px;
      background-position: -592px -689px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }

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
  display:flex;
  &::before {
      ${beforeIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 19px;
      height: 20px;
      background-position: -688px -166px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }

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
  &::before {
      ${beforeIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 42px;
      height: 42px;
      background-position: -154px -577px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }
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
 display:flex;
 &::before {
      ${beforeIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 16px;
      height: 16px;
      background-position: -371px -439px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      padding-right: 3px;
    }

`

const BottomAdd = styled.div`
  color: #232323;
  font-size: 13px;
  font-weight: 400;
  display:flex;
  &::before {
      ${beforeIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 16px;
      height: 16px;
      background-position: -718px -554px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      padding-right: 5px;
    }
`

const TrackList = styled.div`
  width: 100%;
  height: 100%;


`

const Tag = styled.div`
  width:100%;
  height:100%;
  padding: 12px 0;
  margin:0 auto;
  display:flex;
  text-align: center;
  justify-content: center;
  &.modalBackground{
    opacity: 0;
    pointer-events: none;
    /* transition: opacity 0.4s ease-in-out; */
     width:350px;
     height:350px;
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     background-color: #fff;
     /* transition: all .2s ease; */
     box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
     border-radius:6px;
     z-index:2;
     margin-top:200px;
  }
  &.modalShowing-true{
    opacity: 1;
    pointer-events: visible;
    /* margin: auto; */
  }

`

const ModalInner = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    .Lole{
      overflow-y: scroll; 
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
    }
    /* vertical-align: middle; */

`
const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top:10px;
    padding-right: 7%;
    cursor: pointer;
    &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 14px;
      height: 14px;
      margin-top: 10px;
      background-position: -387px -661px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      background-color:white;
    }

`

const ModalText = styled.div`
    width:100%;
    right:0;
    color: black;
    font-size:14px;
    line-height: 22px;
    margin:0 auto;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    font-weight: 700;
    padding-bottom:30px;
    span{
        
    }
`

