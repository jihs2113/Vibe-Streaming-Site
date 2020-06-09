import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';


const SmallModal = (props) => {

    const [ oneState, setOneState ] = useState(false);
    const hi = props.test.test && props.test.test.select;


    const OverChange = () => {
        setOneState(!oneState);

    }
    // console.log("hi", props.saw.saw && props.saw.saw);
    // console.log("ediya", props.test.test && props.test.test.select);
    console.log("likeee?", props.saw.saw && props.saw.saw);
    return (
        
        <LikeInner>
           <Title>
            <LikeImage>
                <img src={props.test.test && props.test.test.m_url}
                        style={{width: "40px", height: "40px", marginRight: "12px"}} alt=""/>
                <ImageTitle>
                    <Iname>{props.test.test && props.test.test.name}</Iname>
                    <Ivocal>{props.test.test && props.test.test.vocal}</Ivocal>
                </ImageTitle>
            
            </LikeImage>
           </Title>
           <Like>
               { oneState ? (
                   <Joayo onMouseEnter={() => OverChange()}
                   onClick={() => props.Heart(props.test.test && props.test.test.like)}>좋아요</Joayo>
                ) :<Joayo onMouseEnter={() => OverChange()}
                onClick={() => props.Heart(props.test.test && props.test.test.like)}>좋아요 취소</Joayo>

               }
                {/* <Joayo onMouseEnter={() => OverChange()}
                onClick={() => props.Heart(props.test.test && props.test.test.like)}>좋아요</Joayo> */}
               
               {/* { props.test.test && props.test.test.select ?
                ( <Joayo onClick={() => props.Heart(props.test.test && props.test.test.select)}>좋아요 취소</Joayo>)
                : <Joayo onClick={() => props.Heart(props.test.test && props.test.test.like)}>좋아요</Joayo>
               }
                */}
           </Like>
           <MyList>
                <span>내 플레이리스트 추가</span>
           </MyList>
           <NextList>
                <span>바로 다음에 추가</span>
           </NextList>
           <FooterList>
                <span>맨 아래에 추가</span>
           </FooterList>
           <SetMp3>
                <span>MP3 구매</span>
           </SetMp3>
           <List>
                <span>가사 보기</span>
           </List>
           <Share>
                <span>공유</span>
           </Share>
        </LikeInner>
        
    )
}


const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

const LikeInner = styled.div`
    top: 5px;
    right: 46px;
    width: 196px;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size:14px;

 `
 const Title = styled.div`
    padding: 5px 20px;
    margin-bottom: 7px;
    width: 100%;
    &:hover{
        background-color: #f3f3f3;
    }

`
const LikeImage = styled.div`
    display:flex;
    flex-direction:row;
    &:hover{
        background-color: #f3f3f3;
    }

`

const ImageTitle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.4;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Iname = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;

`
const Ivocal = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    color: #999;
    font-size: 13px;
`

const Like = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Joayo = styled.div`
    cursor: pointer;

`


const MyList = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const NextList = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const FooterList = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const SetMp3 = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const List = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`

const Share = styled.div`
    width: 100%;
    padding: 6px 20px 7px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #232323;
    &:hover{
        background-color: #f3f3f3;
    }

`


export default withRouter(SmallModal);