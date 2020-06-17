import React from 'react';
import styled,{ css } from 'styled-components';
import SideNav from '../../../Components/SideNav/SideNav';
import icon from '../../../Images/vibe.png';

function MypageMusic () {
  return (
    <MypageMusicTag>
          <TitleWrap>
            <TitleBox>
              <div className="titleDefault">
                <Title>보관함</Title>
                <AreaSubTit>노래</AreaSubTit>
              </div>
              {/* 좋아요 노래가 있으면 렌더링 */}

              {/* <div className="buttonBox">
                <div className="buttonWrap">
                  <button type="button" className="playBtn">
                    <span>전체재생</span>
                  </button>
                </div>
                <div className="buttonWrap">
                  <button type="button" className="randomBtn">
                    <span>랜던재생</span>
                  </button>
                </div>
              </div> */}
              
              {/* 좋아요 노래가 있으면 렌더링 */}
            </TitleBox>
          </TitleWrap>
          <Inner>
            <InnerArea>
              <AreaTit>좋아하는 노래</AreaTit>
              <SubTit>내가 좋아하는 노래들을 모아서 감상해보세요.</SubTit>
            </InnerArea>
          </Inner>
    </MypageMusicTag>
  )
}

export default MypageMusic;

const MypageMusicTag = styled.div`
  height: 100%;
`;

const TitleWrap = styled.h2`
  padding: 50px 0 48px;
`;

const beforeIcon = css`
  display: block;
  content: "";
  background: url(${icon}) no-repeat;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.color.brightGrey};
  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttonWrap {
    padding-left: 10px;
    button {
      display: flex;
      align-items: center;
      width: 134px;
      padding: 10px;
      border-radius: 4px;
      &.playBtn {
        background-color: #ff1150;
        border: 1px solid #ff1150;
        &::before {
            ${beforeIcon};
            width: 19px;
            height: 20px;
            background-position: -592px -689px;
          }
        span {
          color: ${props => props.theme.color.darkwhite};
        }
      
      }
      &.randomBtn {
        border: 1px solid #d7d7d7;
        background-color: #fbfbfb;
        &::before {
            ${beforeIcon};
            width: 19px;
            height: 20px;
            background-position: -688px -166px;
        }
      }
      span {
        margin-left: 5px;
        font-size: 16px;
        line-height: 1.4;
      }
    }
  }
`;

const Title = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${props => props.theme.color.grey};
`;

const AreaSubTit = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 12px 0;
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
`;

const InnerArea = styled.div`
    width: 100%;
    text-align: center;
`;

const AreaTit = styled.p`
    font-size: 27px;
    line-height: 1.4;
    color: ${props => props.theme.color.deepDartGreay};
    font-weight: 700;
`;

const SubTit = styled.p`
    padding-top: 10px;
    font-size: 20px;
    line-height: 1.4;
    color: ${props => props.theme.color.darkGrey};
`;