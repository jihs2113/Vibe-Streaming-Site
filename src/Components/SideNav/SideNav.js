import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SearchInput from './SearchInput';
import NavMenu from './NavMenu';
import icon from '../../Images/vibe.png';
import ExtreMenu from './ExtraMenu';


function SideNav () {
  const { naver } = window;
  const [isSearch, setIsSearch ] = useState(false);
  const [ date, setData ] = useState({
    nickname : "",
    image: ""
  });

  const onSearchInput = () => {
    setIsSearch(!isSearch);
  }

  const CDM = () => {
    Naver();
    GetProfile();
  }

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      cliendId: "KUmflTGVT0UAaj_eD7sG",
      callbackUrl: "http://localhost:3000/",
      isPopup: false

    });
    naverLogin.init();
  }

  const GetProfile = () => {
    const GetUser = () => {
      const location = window.location.href.split("=")[1];
      const loca = location.split("&")[0];
      const header = {
        Autorization: loca,
      };

      fetch("", {
        method: "GET",
        headers: header
      })
      .then(res => res.json())
      // 
      .then(res => {
        localStorage.setItem("wtw-token", res.token);
        setData(res.user);
      })
    }
    window.location.href.includes("access_token") && GetUser();
  }
  useEffect(CDM, []);

  return (
    <SideNavTag>
      <SideNavInner>
        <SideH1>
          <SideLink href="/" className="logo" />
          <SideSearch className="search" onClick={onSearchInput} />
          <SearchInput 
            isSearch={isSearch}
          />
        </SideH1>
        <SideLogin className="login">
          {/* login 조건 */}
          <LoginLink href="#">
            <SideText>로그인</SideText>
          </LoginLink>
          {/* login 조건 */}
        </SideLogin>
        <NavMenu />
        <ExtreMenu/>
      </SideNavInner>
    </SideNavTag>
  )
}

export default SideNav;

const SideNavTag = styled.header`
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #000;
  width: 250px;
  height: 100vh;
`;

const SideNavInner = styled.div`
  height: 100%;
  padding: 0 20px;
`;

const SideH1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
`;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const SideLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  &::before {
    ${beforeIcon}
    width: 111px;
    height: 18px;
    background-position: -327px -81px;
    background-size: 740px 735px;
    margin: 30px 0;
  }
`;

const SideSearch = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%; 
  background: none;
  opacity: 0.8;
  
 &::before {
    ${beforeIcon}
    width: 20px;
    height: 20px;
    margin: 30px 0;
    background-position: -424px -689px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const SideLogin = styled.div`
  padding: 18px 0;
  border-top: 1px solid ${props => props.theme.color.grey};
  border-bottom: 1px solid ${props => props.theme.color.grey};
`;

const LoginLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  &::before {
    ${beforeIcon}       
    width: 30px;
    height: 30px;
    background-position: -638px -463px;
  }
  &:hover {
    opacity: 1;
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
