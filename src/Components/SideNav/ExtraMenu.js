import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';

function ExtreMenu() {
    const [ stateExtra, setStateExtra ] = useState([]);

    const extras = [
      {
        id: 1,
        clazzName: "mymoney",
        hrefs : "https://vibe.naver.com/wheresmymoney"
      },
      {
        id: 2,
        clazzName: "onstage",
        hrefs : "https://music.naver.com/onStage/onStageSeason2List.nhn"
      },
      {
        id: 3,
        clazzName: "musicianLeague",
        hrefs : "https://music.naver.com/musicianLeague/contents/home.nhn"
      },
    ];

    useEffect(()=> {
      setStateExtra(extras)
    },[]);

    return(
        <ExtraMenuTag>
            <ExtraUI>
              {
                stateExtra && stateExtra.map(extra => {
                  return (
                    <ExtraList key={extra.id}>
                      <ExtraLink className={extra.clazzName} href={extra.hrefs} target="_blank"  />
                    </ExtraList>
                  );
                })
              }
                <ExtraList>
                  <ExtraText>서비스소개</ExtraText>
                </ExtraList>
            </ExtraUI>
        </ExtraMenuTag>
    );
}

export default ExtreMenu;

const ExtraMenuTag = styled.div`
  margin-top: 34px;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.color.grey};
`;

const ExtraUI = styled.ul`
  padding: 0;
  height: 100%;
`;

const ExtraList = styled.li`
  opacity: 0.8;
  padding: 12px 0;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const ExtraLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  &.mymoney::before {
    ${beforeIcon}
    width: 72px;
    height: 14px;
    background-position: -353px -315px; 
  }
  &.onstage::before {
    ${beforeIcon}
    width: 82px;
    height: 16px;
    background-position: -356px -285px; 
  }
  &.musicianLeague::before {
    ${beforeIcon}
    width: 82px;
    height: 16px;
    background-position: -4px -415px; 
  }
`;

const ExtraText = styled.span`
  font-size: 17px;
  line-height: 1.4;
  color: ${props => props.theme.color.white};
  margin: 0;
`;