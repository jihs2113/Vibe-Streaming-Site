import React from 'react';
import styled from "styled-components";
import SideNav from '../SideNav/SideNav';
import Player from '../../Pages/Player/Player';

function Layout(props) {
    return (
        <LayoutTag>
            <SideNav />
                <Container>
                    <Content>
                        {props.children}    
                    </Content>
                </Container>
            <Player/>
        </LayoutTag>
    );
}

export default Layout;

const LayoutTag = styled.div`
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
  @media(max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 67px 0 0;
    margin: 0 22px;
  }
`;