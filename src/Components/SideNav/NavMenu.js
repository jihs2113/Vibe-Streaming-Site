import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { setNavList } from '../../store/actions/index';
import { connect } from "react-redux";
import icon from '../../Images/vibe.png';

function NavMenu({ setNavList, navList }) {
    const [ stateList, setStateList ] = useState([]);
    const [ stateLoker, setStateLoker ] = useState([]);
    
    const listTitle = [
      {
        id: 1,
        title: "투데이",
        clazzName: "todayLink",
        hrefs: "/",
      },
      {
        id: 2,
        title: "차트",
        clazzName: "chartLink",
        hrefs: "/Chart"
      },
      {
        id: 3,
        title: "DJ 스테이션",
        clazzName: "djLink",
        hrefs: "#",
      }
    ];

    const lokerTitle = [
      {
        id: 4,
        title: "노래",
        clazzName: "tracks",
        hrefs: "/library/tracks"
      },
      {
        id: 5,
        title: "플레이리스트",
        clazzName: "playlists",
        hrefs: "/library/playlists"
      },
      {
        id: 6,
        title: "아티스트",
        clazzName: "artists",
        hrefs: "/library/artists"
      },
      {
        id: 7,
        title: "앨범",
        clazzName: "albums",
        hrefs: "/library/albums"
      }
    ];
    
    const onIsActive = (navList) => {
      console.log(typeof navList);
      setNavList(navList)
    }
    useEffect(() => {
      setStateList(listTitle);
    },[]);

    useEffect(() => {
      setStateLoker(lokerTitle);
    }, []);

    let history = useHistory();
    const token = localStorage.getItem("access_token");
    
    return (
        <NavMenuTag>
          <NavBox>
            <NavUl>
                {
                  stateList && stateList.map((list) => {
                    return (
                      <NavList key={list.id}>
                        <ListLink className={list.clazzName} navList={navList} onClick={() => onIsActive(list.id)}>
                          <SideText className={list.clazzName} navList={navList} onClick={() => history.push(`${list.hrefs}`)}>{list.title}</SideText>
                        </ListLink>
                      </NavList>
                    );
                  })
                }
            </NavUl>
          </NavBox>
          {/* login되면 나타나는 nav */}
          {
            token ? (
              <NavBox>
                  <LokerTit>보관함</LokerTit>
                  <NavUl>
                      {
                        stateLoker && stateLoker.map(list => {
                          return (
                            <NavList key={list.id}>
                              <ListLink  navList={navList} onClick={() => onIsActive(list.id)}>
                                  <LokerText className={list.clazzName} navList={navList} onClick={() => history.push(`${list.hrefs}`)}>{list.title}</LokerText>
                              </ListLink>
                            </NavList>
                          );
                        })
                      }
                  </NavUl>
                </NavBox>   
            ) : null
          }
          
          {/* login되면 나타나는 nav */}
        </NavMenuTag>
    );
}

const mapStateToProps = (state) => { // 리덕스 컨벤션 : 지금 스토어에있는 스테이트를 프롭스로 받아서 새로운 객체를 리턴 그 객체ㅇ가 송 리스트에 대한 이름으로 들어감
  return {
    navList: state.navList
  }
}

export default connect(mapStateToProps, {setNavList})(NavMenu);

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

const ListLink = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background: none;
  
  &.todayLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    padding-bottom: 3px;
    background-position: ${props => props.navList === 1 ? "-508px -689px" : " -536px -689px"};
  }
  &.chartLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    padding-bottom: 3px;
    background-position:${props => props.navList === 2 ? "-60px -689px" : "-32px -689px"}; 
  }
  &.djLink::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    padding-bottom: 3px;
    background-position: ${props => props.navList === 3 ? "-284px -689px" : "-256px -689px"}; 
  }
`;

const SideText = styled.span`
  margin: 0 8px;
  font-size: 17px;
  line-height: 1.4;
  &.todayLink {
    color: ${props => !(props.navList === 1) ? props.theme.color.white : props.theme.color.mainColor};
  }
  &.chartLink {
    color: ${props => !(props.navList === 2) ? props.theme.color.white : props.theme.color.mainColor};
  }
  &.djLink {
    color: ${props => !(props.navList === 3) ? props.theme.color.white : props.theme.color.mainColor};
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
  &.tracks {
    color: ${props => !(props.navList === 4) ? props.theme.color.white : props.theme.color.mainColor};
  }
  &.playlists {
    color: ${props => !(props.navList === 5) ? props.theme.color.white : props.theme.color.mainColor};
  }
  &.artists {
    color: ${props => !(props.navList === 6) ? props.theme.color.white : props.theme.color.mainColor};
  }
  &.albums {
    color: ${props => !(props.navList === 7) ? props.theme.color.white : props.theme.color.mainColor};
  }
  
`;