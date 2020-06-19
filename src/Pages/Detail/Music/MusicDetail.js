import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { API } from '../../../config'; 
import icon from '../../../Images/vibe.png';

function MusicDetail(props) {
    const [ musicDetail, setMusicDetail ] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        fetch(`${API}/music/detail/${props.match.params.id}` , {
        method: "GET",
        headers : {
            "Content-type" : "application/json",
            "Authorization" : token
        },
        })
        .then(res => res.json())
        .then(res => setMusicDetail(res.data))
        .catch(err => console.log("err: ", err));
      },[])

    return (
        <MusicDetailTag>
            <Section>
                <ArtistWrap>
                    <ArtistImgBox>
                        <img src={musicDetail.image_url} alt="albumImg"/>
                    </ArtistImgBox>
                    <ArtistInfo>
                        <AreaTextBox>
                            <h2>{musicDetail.name}</h2>
                            <p className="artistName">{musicDetail.artist}</p>
                            <div className="pTagBox">
                                <p className="lyrics">{musicDetail.writer}}</p>
                                <p className="composition">{musicDetail.composer}</p>
                                <p className="arrangement">{musicDetail.arranger}</p>
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
                <LyricsWrap>
                    <h3>가사</h3>
                    <p>{musicDetail.lyrics}</p>
                </LyricsWrap>
            </Section>
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
    height: 100%;
    width: 964px;
    margin: 0 auto;
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

const LyricsWrap = styled.div`
    padding-top: 30px;
    border-top: 1px solid #e4e4e4;
    h3 {
        font-size: 20px;
        line-height: 1.4;
        padding: 10px 0;
    }
    p {
        font-size: 18px;
        line-height: 1.4;
        padding-right: 50%;
        padding-bottom: 200px;
    }
`;