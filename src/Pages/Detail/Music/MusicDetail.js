import React from 'react';
import styled, { css } from 'styled-components';
import SideNav from '../../../Components/SideNav/SideNav';
import icon from '../../../Images/vibe.png';

function MusicDetail() {
    return (
        <MusicDetailTag>
            <SideNav/>
            <Container>
                <Content>
                    <Section>
                        <ArtistWrap>
                            <ArtistImgBox>
                                <img src="https://musicmeta-phinf.pstatic.net/album/004/578/4578032.jpg?type=r480Fll&v=20200525175904" alt="albumImg"/>
                            </ArtistImgBox>
                            <ArtistInfo>
                                <AreaTextBox>
                                    <h2>Beautiful</h2>
                                    <p className="artistName">김우석</p>
                                    <div className="pTagBox">
                                        <p className="lyrics">작사</p>
                                        <p className="composition">작곡</p>
                                        <p className="arrangement">편곡</p>
                                    </div>
                                </AreaTextBox>
                                <AreaButtonBox>
                                    <Button>
                                        <button className="playBtn" type="button">
                                            <span>재생</span>
                                        </button>
                                    </Button>
                                    <Button>
                                        <button className="mp3Btn" type="button">
                                            <span>MP3 구매</span>
                                        </button>
                                    </Button>
                                    <Button>
                                        <button className="likeBtn" type="button"></button>
                                        <button className="addBtn" type="button"></button>
                                    </Button>
                                </AreaButtonBox>
                            </ArtistInfo>
                        </ArtistWrap>
                        <div>
                            <div>
                                <h3>가사</h3>
                            </div>
                        </div>
                    </Section>
                </Content>
            </Container>
        </MusicDetailTag>
    );
}

export default MusicDetail;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const MusicDetailTag = styled.div`
    height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  padding-left: 250px;
  background: ${props=> props.theme.color.white};
  @media(max-width: 768px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 100%;
  width: 964px;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 67px 0 0;
    margin: 0 22px;
  }
`;

const Section = styled.section`
    
`;

const ArtistWrap = styled.div`
    display: flex;
    margin: 60px 0;
`;

const ArtistImgBox = styled.div`
    width: 195px;
    height: 195px;
    margin-right: 30px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const ArtistInfo = styled.div`
    position: relative;
    width: 77%;
`;

const AreaTextBox = styled.div`
    min-height: 143px;
    line-height: 1.4;
    h2 {
        font-size: 30px;
    }
    .artistName {
        padding: 4px 0;
        font-size: 19px;
    }
    .pTagBox {
        font-size: 14px;
        color: ${props => props.theme.color.grey};
    }
`;

const AreaButtonBox = styled.div`
    display: flex;
    align-items: center;
    height: 52px;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 124px;
    button {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
        }
    }
    &:first-child {
        margin-left: 0;
    }
    .playBtn {
        background-color: ${props => props.theme.color.mainColor};
        border: ${props => props.theme.color.mainColor};
        span {
            color: ${props => props.theme.color.darkwhite};
            &::before {
                ${beforeIcon};
                width: 19px;
                height: 20px;
                margin: -3px 4px 0 0;
                background-position: -592px -689px;            
            }
        }
        
    }
    .mp3Btn {
        background-color: ${props => props.theme.color.brightGrey};
        border: ${props => props.theme.color.brightGrey};
    }
    .likeBtn {
        background: none;
        &::after {
            ${beforeIcon};
            width: 42px;
            height: 42px;
            background-position: -54px -577px;
        }
    }
    .addBtn {
        background: none;
        &::after {
            ${beforeIcon};
            width: 42px;
            height: 42px;
            background-position: -154px -577px;
        }
    }
    margin-left: 10px;
`;