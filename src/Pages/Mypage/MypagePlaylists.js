import React from 'react';
import styled from 'styled-components';
import SideNav from '../../Components/SideNav/SideNav';

function MypagePlaylists () {
  return (
    <MypagePlaylistTag>
      <SideNav />
      <Container>
        <Content>
          <TitleWrap>
            <TitleBox>
              <Title>보관함</Title>
              <AreaSubTit>플레이리스트</AreaSubTit>
            </TitleBox>
          </TitleWrap>
          <Inner>
            <InnerArea>
              <AreaTit>보관한 플레이리스트</AreaTit>
              <SubTit>자주 듣고 싶은 플레이리스트는 보관함에 모아보세요.</SubTit>
              <ButtonBox>
                <AddBtn>
                  <BtnText>플레이리스트 추가</BtnText>
                </AddBtn>
              </ButtonBox>
            </InnerArea>
          </Inner>
        </Content>
      </Container>
    </MypagePlaylistTag>
  )
};

export default MypagePlaylists;

const MypagePlaylistTag = styled.div`
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
    padding: 10px 0;
    font-size: 27px;
    line-height: 1.4;
    color: ${props => props.theme.color.deepDartGreay};
    font-weight: 700;
`;

const SubTit = styled.p`
    padding: 10px 0;
    font-size: 20px;
    line-height: 1.4;
    color: ${props => props.theme.color.darkGrey};
`;

const ButtonBox = styled.div`
  padding: 10px 0;
`;

const AddBtn = styled.button`
  padding: 20px;
  border-radius: 4px;
`;

const BtnText = styled.span`
  font-size: 15px;
  line-height: 1.4;
`;