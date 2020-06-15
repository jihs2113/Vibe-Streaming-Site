import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import icon from '../../../Images/vibe.png';

function MypageExistArtist({ stateLike, onRemove, artistArray }) {
  
    console.log("stateLike: ", stateLike);
    return (
        <Section stateLike={stateLike}>
            <div className="inner">
                <ul className="artistList">
                    {
                        artistArray.map((artist) => {
                            return (
                                <li key={artist.artist_id}>
                                    <Link className="DetailLink" to="/">
                                      <img src={artist.artist_img} alt="artistImg" />
                                      <p>{artist.artist_name}</p>
                                    </Link>
                                    <button type="button" className="likeBtn" onClick={() => onRemove(artist)}/>
                                </li>
                                
                            );
                        })
                    }
                </ul>
            </div>
        </Section>
    );
}

export default MypageExistArtist;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const Section = styled.section`
  margin-top: 30px;
  .inner {
    height: 100%;
    .artistList {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        display: flex;
        align-items: center;
        position: relative;
        width: 23%;
        height: ${props => props.stateLike? "100%" : "0%"};
        transition: height 0.3s ease-in, 0.3s ease-in;
        padding: 0 16px 40px 0;
        opacity: ${props => props.stateLike ? 1 : 0};
       
        .DetailLink {
          display: block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          p {
            margin-top: 10px;
            text-align: center;
            font-size: 17px;
          }
          
        }
        .likeBtn {
            position: absolute;
            right: 6px;
            bottom: 92px;
            width: 42px;
            height: 42px;
            padding: 0;
            border-radius: 50%;
            background-color: #fbfbfb;
            &::after {
            width: 42px;
            height: 42px;
            ${beforeIcon};
            background-position: -532px -505px;
          }
        }
      }
    }
  }
`;