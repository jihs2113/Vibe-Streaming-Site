import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';


const WinModal = (props) => {
    const [rost , rostState ]=useState([])

    const EditText = () =>{
        let tmp = props.test.list.split('\n');
        let str= tmp.join("<br />\r\n")
        // let newLine = String.fromCharCode(13, 10);
        // let str = props.test.list.replaceAll('\n',newLine);
        // let str=tmp.join(newLine);
        // let tmp2 = <p>{tmp.join("<br>")}</br>;
        // return tmp2;
        return str;
    }

    return (
        <ModalInner>
            <Close onClick={() => props.CloseModal(false)}></Close>
            <ModalImage>
            <img className="Mimg" src={props.test && props.test.img}
                    alt=""/>
            <ModalTitle>
                <span style={{fontWeight: "600"}}>{props.test && props.test.name}</span>
                <span>{props.test && props.test.artist}</span>
            </ModalTitle>
            
            </ModalImage>

        <ModalText>
            <h2 className="Mname">{props.test && props.test.name}</h2>
               {props.test && EditText()}
           
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
    width:500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    
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


const ModalImage = styled.div`
    width:100%;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    .Mimg{
        width:80px;
        height:80px;
    }

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
    right:0;
    color: #666;
    text-align: left;
    font-size:14px;
    line-height: 22px;
    padding: 5% 5%;
    padding-right:40%;
    overflow-y: scroll;
    .Mname{
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        font-size:12px;
        color:black;
        font-weight:700;
        margin-bottom:10px;
    } 
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