import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';
import { connect } from "react-redux";



const WinModal = ({songInfo}) => {
  const [display, setDisplay] = useState(false);

  return (
        <ModalInner display={display}>
          <Close onClick={setDisplay(!display)}></Close>
          <ModalImage>
          <img className="Mimg" src={songInfo.urlSmall}
                  alt=""/>
          <ModalTitle>
              <span style={{fontWeight: "600"}}>{songInfo.title}</span>
              <span>{songInfo.artist}</span>
          </ModalTitle>
          
          </ModalImage>
          <ModalText>
              <h2>modal header</h2>
              <span>
                  {songInfo.lyrics}
              </span>
              <form>
                  <button>Join now~</button>
              </form>
          </ModalText>
        </ModalInner>   
        
    )
}




const mapStateToProps = (state) => {
  return{
    songInfo: state.songInfo
  };
};

export default connect(mapStateToProps)(WinModal);

const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

