import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';

function SearchInput({ isSearch }) {
    const [ showInput, setShowInput ] = useState(isSearch);
    const [ showKeyword, setShowKeyWord ] = useState(false); 
    const [ inputs, setInputs ] = useState({
        artist: ""
    });

    const { artist } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
        areaShow();
    };

    const closeInputText = () => {
        setInputs({
            artist: ""
        })
    }

    const areaShow = () => {
        setShowKeyWord(true);
    }

    useEffect(() => {
        setShowInput(isSearch);
    },[isSearch]);

    useEffect(() => {
        if(inputs.artist.length === 0 ) {
            setShowKeyWord(false);
        } else if(inputs.artist.length > 1) {
            setShowKeyWord(true);
        }
    },[inputs]);

    return (
        <SearchInputTag showInput={showInput}>
            <InputArea>
                <InputBox type="text" name="artist" value={artist} placeholder="VIBE 검색" onChange={onChange}/>
            </InputArea>
            {
                showKeyword ? (
                    <KeywordArea showKeyword>
                        <KeywordList>
                            <KeywordLi>
                                <KeywoedLink href="https://vibe.naver.com/search?query=%EC%95%84%EC%9D%B4%EC%9C%A0%28IU%29">
                                    <KeyWordText>{artist}</KeyWordText>
                                </KeywoedLink>
                            </KeywordLi>
                        </KeywordList>
                    </KeywordArea>
                ) : null
            }
           
            <CloseBtn onClick={closeInputText}/>
        </SearchInputTag>
     
    );
}

export default SearchInput;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const SearchInputTag = styled.div`
    position: fixed;
    top: 0;
    left: 250px;
    width: calc(100% - 250px);
    height: ${(props)=> props.showInput ? "82px": "0px"};
    z-index: 100;
    border-bottom: 1px solid rgba(0,0,0,.1);
    transition: height 0.3s ease-in,opacity 0.3s ease-in;
    background: #fff;
    opacity:${(props)=> props.showInput ? 1: 0};
    &::before {
      ${beforeIcon}
      position: absolute;
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 20px;
      height: 20px;
      background-position: -688px -558px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }
`;

const InputArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    transition: opacity .1s ease-in .2s;
    padding: 0 30px;
`;

const InputBox = styled.input`
    width: 100%;
    padding: 11px 55px 13px 45px;
    font-size: 21px;
    border: none;
    border-radius: 4px;
    caret-color: ${props => props.theme.color.mainColor};
    &:focus {
      outline: 0;
      -webkit-box-shadow: 0 0 4px 0 #0c96ff;
      box-shadow: 0 0 4px 0 #0c96ff;
    }
`;

const KeywordArea = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 67px;
    left: 30px;
    right: 30px;
    padding: 15px 0;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
`;

const KeywordList = styled.ul`
    height: 100%;
    width: 100%;
`;

const KeywordLi = styled.li`
    padding: 12px 30px 12px 28px;
`;

const KeywoedLink = styled.a`
    display: flex;
    align-items: center;
    &::before {
        ${beforeIcon}
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-position: -88px -689px;
    }
    &:hover {
        cursor: pointer;
    }
`;

const KeyWordText = styled.span`
    font-size: 16px;
    line-height: 1.4;
`;

const CloseBtn =  styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 100%;
    background: none;
    &::before {
        ${beforeIcon};
        position: absolute;
        top: 30px;
        right: 45px;
        width: 20px;
        height: 20px;
        background-position: -144px -689px;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }
`;