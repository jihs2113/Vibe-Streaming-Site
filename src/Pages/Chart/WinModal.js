import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';


const WinModal = (props) => {

    
    return (
        
        <ModalInner>
            <Close onClick={() => props.CloseModal(false)}>X</Close>
            <ModalImage>
            <img src="https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228"
                    alt=""/>
            <ModalTitle>
                <span>에잇</span>
                <span>아이유</span>
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
            </span>
            <form>
                <button>Join now~</button>
            </form>
        </ModalText>
        </ModalInner>
        
    )
}

const ModalInner = styled.div`
    width:100%;
    /* max-width: calc(100%-60px); */
    display: flex;
    flex-direction: column;
        &.modalShowing-true{
        opacity: 0;
        pointer-events: none;
        }    

`
const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top:10px;
    padding-right: 7%;
    cursor: pointer;

`


const ModalImage = styled.div`
    width:100%;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: row;
    align-content: space-between;

`
const ModalTitle = styled.div`
    padding-left:5%;
    width:100%;
    display: flex;
    flex-direction: column;
    text-align:left;

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