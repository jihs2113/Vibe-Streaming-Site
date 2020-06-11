import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';

function NavMenu() {
    const [ stateList, setStateList ] = useState([]);
    const [ stateLoker, setStateLoker ] = useState([]);
    
    const listTitle = [
      {
        id: 1,
        title: "투데이",
        clazzName: "todayLink",
        isActive : "active"
      },
      {
        id: 2,
        title: "차트",
        clazzName: "chartLink",
      },
      {
        id: 3,
        title: "DJ 스테이션",
        clazzName: "djLink",
      }
    ];

    const lokerTitle = [
      {
        id: 1,
        title: "아티스트"
      },
      {
        id: 2,
        title: "플레이리스트"
      },
      {
        id: 3,
        title: "노래"
      },
      {
        id: 4,
        title: "아티스트"
      }
    ];
    
    useEffect(() => {
      setStateList(listTitle);
    },[]);

    useEffect(() => {
      setStateLoker(lokerTitle);
    }, []);

    return (
        <NavMenuTag>
          <NavBox>
            <NavUl>
                {
                  stateList && stateList.map((list) => {
                    return (
                      <NavList key={list.id}>
                        <ListLink className={list.clazzName} key={list.id}>
                          <SideText className={list.isActive} >{list.title}</SideText>
                        </ListLink>
                      </NavList>
                    );
                  })
                }
            </NavUl>
          </NavBox>
          {/* login되면 나타나는 nav */}
          <NavBox>
            <LokerTit>보관함</LokerTit>
            <NavUl>
                {
                  stateLoker && stateLoker.map(loker => {
                    return (
                      <NavList key={loker.id}>
                        <ListLink>
                            <LokerText>{loker.title}</LokerText>
                        </ListLink>
                      </NavList>
                    );
                  })
                }
            </NavUl>
          </NavBox>
          {/* login되면 나타나는 nav */}
        </NavMenuTag>
    );
}

export default NavMenu;

const NavMenuTag = styled.nav`
  padding: 20px 0 0;
`;

const NavBox = styled.div`
  margin: 22px 0;
`;

const NavUl = styled.ul`
  padding: 0;
`;

const NavList = styled.li`
  padding: 10px 0;
  opacity: 0.8;
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

const ListLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  &.todayLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    background-position: -508px -689px;
  }
  &.chartLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    background-position: -32px -689px;
  }
  &.djLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    background-position: -256px -689px;
  }
`;

const SideText = styled.span`
  margin: 0 8px;
  font-size: 17px;
  line-height: 1.4;
  color: ${props => props.theme.color.white};
  &.active {
    color: ${props => props.theme.color.mainColor};
  }
`;

const LokerTit = styled.span`
  font-size: 15px;
  margin: 0;
  line-height: 1.4;
  color: ${props => props.theme.color.darkGrey};
`;

const LokerText = styled.span`
  margin: 0;
  font-size: 17px;
  line-height: 1.4;
  color: ${props => props.theme.color.white};
  
`;