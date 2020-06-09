import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';


function Main () {
  return (
    <>
      <div className="body">
            <Header>
                	
            </Header>
            <Container>
                <Content>
                  	asd
                </Content>
            </Container>
      </div>
    </>
    
    
  )
}

const Header = styled.div`
        bottom: 81px;
        left: 0;
        width: 225px;
        background-color: black;
        position: fixed;
        top: 0;
        z-index: 10100;
`
const Container = styled.div`
        padding-bottom: 467px;
        min-height: 600px;
        padding-left: 225px;
        background-color: #fbfbfb;


`

const Content = styled.div`
            max-width: 1273px;
            position: relative;
            width: 964px;
            margin: 0 auto;

`





export default withRouter(Main);