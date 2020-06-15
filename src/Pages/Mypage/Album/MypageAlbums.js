import React from 'react';
import styled from 'styled-components';
import SideNav from '../../../Components/SideNav/SideNav';

function MypageAlbums () {
  return (
    <MypageAlbumTag>
      <Container>
        <Content>
          <TitleWrap>
            <TitleBox>
              <Title>보관함</Title>
              <AreaSubTit>앨범</AreaSubTit>
            </TitleBox>
          </TitleWrap>
          <Inner>
            <InnerArea>
              <AreaTit>보관한 앨범</AreaTit>
              <SubTit>내 마음에 드는 앨범을 보관함에 모아보세요.</SubTit>
            </InnerArea>
          </Inner>
        </Content>
      </Container>
    </MypageAlbumTag>
  )
};

export default MypageAlbums;

const MypageAlbumTag = styled.div`
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