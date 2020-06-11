import React from 'react';
import styled from 'styled-components';
import SideNav from '../../Components/SideNav/SideNav';

function MypageMusic () {
  return (
    <MypageMusicTag>
      <SideNav />
      <Container>
        <Content>
          <TitleWrap>
            <TitleBox>
              <Title>보관함</Title>
              <AreaSubTit>노래</AreaSubTit>
            </TitleBox>
          </TitleWrap>
          <Inner>
            <InnerArea>
              <AreaTit>좋아하는 노래</AreaTit>
              <SubTit>내가 좋아하는 노래들을 모아서 감상해보세요.</SubTit>
            </InnerArea>
          </Inner>
        </Content>
      </Container>
    </MypageMusicTag>
  )
}

export default MypageMusic;

const MypageMusicTag = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  padding-left: 250px;
  background: ${props=> props.theme.color.white};

`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 100%;
  width: 964px;
  margin: 0 auto;
`;

const TitleWrap = styled.h2`
  padding: 41px 0 48px;
`;

const TitleBox = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.color.brightGrey};
`;

const Title = styled.p`
  font-size: 15px;
  color: ${props => props.theme.color.grey};
`;

const AreaSubTit = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 15px 0;
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