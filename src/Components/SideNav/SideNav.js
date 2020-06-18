import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import SearchInput from './SearchInput';
import NavMenu from './NavMenu';
import ExtreMenu from './ExtraMenu';
import icon from '../../Images/vibe.png';


function SideNav () {
  const { naver } = window;
  const [ isSearch, setIsSearch ] = useState(false);
  const [ isProfile, setIsProfile ] = useState(false);
  const [ userData, setUserData ] = useState({
    nickname : "",
    image: ""
  });



  const onSearchInput = () => {
    setIsSearch(!isSearch);
  }
  let history = useHistory();
  const onLogout = () => {
    console.log("logout click");
    window.localStorage.clear();
    history.push('/');
    window.location.reload();
  }

  const onProfile = () => {
    setIsProfile(!isProfile);
  }

  const Login = () => {
    Naver();
    GetProfile();
  }

  useEffect(Login, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "rHi1ugFEJ65Wm4GmHNae",
      callbackUrl: "http://localhost:3000/",
      isPopup: false,
      loginButton: {color: "green", type: 1, height: 30} ,
      callbackHandle: true
    });
    naverLogin.init();

    // naverLogin.getLoginStatus(function (status) {
    //   if (status) {
    //     console.log("status: ", status)
    //     let profileImage = naverLogin.user.getProfileImage();
    //     let id = naverLogin.user.getId();
    //     var email = naverLogin.user.getEmail();
    //     console.log("profileImage: ", profileImage);
    //     console.log("id: ", id);
    //     console.log("email: ", email);
    //   } else {
    //     console.log("AccessToken이 올바르지 않습니다.");
    //   }
    // });
  }

  const GetProfile = () => {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const token = location.split('&')[0];
      console.log("token: ", token);
      fetch("http://10.58.2.47:8000/account/sign-in" , {
        method: "GET",
        headers : {
          "Content-type" : "application/json",
          "Authorization": token
        },
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("access_token", res.token);
        setUserData({
          nickname : res.name,
          image : res.image
        })
      })
      .catch(err => console.log("err : ", err));
    }
  };
  
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
        <Container>
          {
             userData.image ? (
              <SideLogin className="login" onClick={onProfile}>
                <UserLoginInfo images={userData.image}>
                  <SideText>{userData.nickname}</SideText>
                </UserLoginInfo>
                <ProfileBox isProfile={isProfile}>
                  <ProfileBtn type="button">
                    <span>My 멤버십</span>
                  </ProfileBtn>
                  <ProfileBtn type="button">
                    <span>공지사항</span>
                  </ProfileBtn>
                  <ProfileBtn type="button">
                    <span>계정설정</span>
                  </ProfileBtn>
                  <ProfileBtn type="button" onClick={onLogout}>
                    <span>로그아웃</span>
                  </ProfileBtn>
                </ProfileBox> 
              </SideLogin>
            ) : (
              <SideLogin className="login">
                <UserInfo>
                  <SideText>로그인</SideText>  
                </UserInfo>
                <LoginLink onClick={Login} id="naverIdLogin" /> 
              </SideLogin>
            )
          }
          <NavMenu />
          <ExtreMenu/>
        </Container>
      </SideNavInner>
    </SideNavTag>
  )
}

export default SideNav;

const SideNavTag = styled.header`
  position: fixed;
  
  top: 0;
  background-color: #000;
  width: 250px; 
  height: 100vh;
  @media(max-width: 768px) {
      width: 100%;
      height: 67px;
    }
`;

const SideNavInner = styled.div`
  z-index: 9999;
  height: 100%;
  padding: 0 20px;
`;

const Container = styled.div`

  width: 100%;
  height: 100%;
  @media(max-width: 768px) {
      display: none;
    }
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-top: 1px solid ${props => props.theme.color.grey};
  border-bottom: 1px solid ${props => props.theme.color.grey};
`;

const LoginLink = styled.button`
  display: flex;
  align-items: center;
  opacity: 0.8;
  background: none;
  padding: 0;
  &:hover {
    opacity: 1;
  }
  #naverIdLogin_loginButton {
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled(LoginLink)`
  &::before {
      ${beforeIcon}       
      width: 30px;
      height: 30px;
      background-position: -638px -463px;
    }
`;

const UserLoginInfo = styled(LoginLink)`
  ::before {
    display: block;
    content: '';
    width: 30px;
    height: 30px; 
    border-radius: 50%;
    background: url(${(props) => props.images});
    background-position: 50% 50%;
    background-size: cover;
  }
  ::after {
    ${beforeIcon};
    background-position: -674px -574px;
    width: 6px;
    height: 6px;
  }
`;

const SideText = styled.span`
  margin: 0 8px;
  font-size: 17px;
  line-height: 1.4;
  opacity: 0.8;
  color: ${props => props.theme.color.white};
  &.active {
    color: ${props => props.theme.color.mainColor};
  }
`;

const ProfileBox = styled.div`
  position: absolute;
  top: 48px;
  left: 40px;
  display: ${props => props.isProfile ? "block" : "none"};
  width: 150px;
  z-index: 10;
  background: #fff;
  padding: 11px 0;
  border-radius: 4px;
`;

const ProfileBtn = styled.button`
  width: 100%;
  padding: 6px 20px 7px;
  background: none;
  &:hover {
    cursor: pointer;
    background: #dfdfdf;
  }
  span {
    font-size: 15px;
    line-height: 1.4;
  }
`;