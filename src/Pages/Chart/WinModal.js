import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';


const WinModal = (props) => {

    
    // console.log("modal props test: ", props.test.test);
    // console.log("modal props test: ", props.test.test && props.test.test.id);

    // for (let i in props.test.test) {
    //     console.log("modal props test: ", i, props.test.test[i])
    // }
    // const bobo = props.test.test;
    // // const [boState , boSetState] = useState([props.test.test]);
    // // const kaka [] = Object.keys(bobo);
    // const [ oneState, setOneState ] = useState([Object.keys(bobo)]);
    // console.log("kaka",oneState);

    return (
        
        <ModalInner>
            <Close onClick={() => props.CloseModal(false)}></Close>
            <ModalImage>
            <img src={props.test.test && props.test.test.m_url}
                    alt=""/>
            <ModalTitle>
                <span style={{fontWeight: "600"}}>{props.test.test && props.test.test.name}</span>
                <span>{props.test.test && props.test.test.vocal}</span>
            </ModalTitle>
            
            </ModalImage>
        <ModalText>
            <h2>modal header</h2>
            <span>So are you happy now
                Finally happy now are you

                뭐 그대로야 난 
                다 잃어버린 것 같아  

                모든 게 맘대로 왔다가 인사도 없이 떠나
                이대로는 무엇도 사랑하고 싶지 않아 
                다 해질 대로 해져버린
                기억 속을 여행해 

                우리는 오렌지 태양 아래
                그림자 없이 함께 춤을 춰
                정해진 이별 따위는 없어 
                아름다웠던 그 기억에서 만나 
                Forever young 
                
                우우우 우우우우  우우우 우우우우
                Forever we young 
                우우우 우우우우
                이런 악몽이라면 영영 깨지 않을게 

                섬 그래 여긴 섬 서로가 만든 작은 섬
                예 음 forever young 영원이란 말은 모래성

                작별은 마치 재난문자 같지
                그리움과 같이 맞이하는 아침
                서로가 이 영겁을 지나 
                꼭 이 섬에서 다시 만나

                지나듯 날 위로하던 누구의 말대로 고작
                한 뼘짜리 추억을 잊는 게 참 쉽지 않아
                시간이 지나도 여전히
                날 붙드는 그곳에 

                우리는 오렌지 태양 아래
                그림자 없이 함께 춤을 춰
                정해진 안녕 따위는 없어 
                아름다웠던 그 기억에서 만나 
            </span>
            <form>
                <button>Join now~</button>
            </form>
        </ModalText>
        </ModalInner>
        
    )
}


const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

const ModalInner = styled.div`
    width:100%;
    
    display: flex;
    flex-direction: column;

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


const ModalImage = styled.div`
    width:100%;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: row;
    align-content: space-between;

`
const ModalTitle = styled.div`
    padding-top:5%;
    padding-left:5%;
    width:100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.5;

`


const ModalText = styled.div`
    width:100;
    right:0;
    color: #666;
    text-align: left;
    font-size:14px;
    line-height: 22px;
    padding: 5% 5%;
    padding-right:50%;
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

`

export default withRouter(WinModal);