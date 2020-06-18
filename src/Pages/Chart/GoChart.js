import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';




const GoChart = (props) => {

  const [ musicState, setMusicState ] = useState([]);
  const [ test, setTest ] =useState([]);
  const [ saw, setSaw ] = useState([]);
  const [ modalState, setModalState ] = useState(false);
  const [ likeState, setLikeState ] = useState(false);
  const [ toggle, setToggle ] = useState(true);
  const [ gokState, setGokState ] = useState(true);

 
  // useEffect(() => {

  //   fetch("/jh_data/jh.json")
  //   .then((res) => res.json())
  //   .then((res) => setMusicState(res.data));

    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       id: d.id,
    //       album: d.album,
    //       img: d.m_url,
    //       name: d.name,
    //       vocal: d.vocal,
    //       select:false,
    //     };
    //   })
    // );
    // setMusicState(musicState);

    
  // }, []);

  const Over = () => {
    setGokState(!gokState);
  }
  // const Smart = (mart) =>{
  //   setLikeState(!likeState)
  //   setToggle(!toggle)
  // }

  return (
        
          <Tbody>
            
            {/* {musicState.map((d, i) => ( */}
              
                <OneList>
                  <SelectOne onMouseEnter={()=> Over()} onMouseLeave={()=> Over()}>
                      <div className="kmk">
                        <img 
                            src={props.img} className="mk" style={{width: 40, height: 40, }} alt=""/>
                      </div>
                      {/* { gokState ?
                        ( <img 
                          src={d.m_url} className="mk" style={{width: 40, height: 40, }} alt=""/>)
                          : <Gok></Gok>

                      } */}
                      
                     
                      {/* <Gok src={d.m_url} >

                      </Gok> */}
                      {/* { gokState ?
                        (
                          <img 
                            src={d.m_url} className="mk" style={{width: 40, height: 40, }} alt=""/>
                         ) 
                        : 
                          <img 
                            src={<Mplay></Mplay>} style={{width: 40, height: 40, }} alt=""/>
                         
                      } */}
                      <Part>
                        <Ta>{props.id}</Ta>
                        <Tl>
                          <Td style={{color: "black"}}>{props.name}</Td>
                          <Tc>{props.artist}</Tc>
                        </Tl>
                      </Part>
                  </SelectOne>
                </OneList>
                
              
            {/* ))} */}
            
          </Tbody>
        
  );
}


const beforeIcon = css`
display: block;
content: "";
background: url(${icon}) no-repeat;
`;

const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  flex-wrap:wrap;
  width:500px;
  max-width: 1270px;
  

`
const OneList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  


`

const SelectOne = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;
    border-bottom: 1px solid aliceblue;
    position: relative;
    &:hover{
      /* background: rgb(228, 228, 228);; */
      cursor: pointer;
      .kmk{
        background-color: rgba(0,0,0,.8);
      }
      .mk{
        /* background: rgb(228, 228, 228); */
        opacity:0.3;
      }
      &::after  {
      ${afterIcon}
        position: absolute;
        top: 12px;
        bottom: 20px;
        left: 5px;
        background-position: -491px -439px;
        width: 16px;
        height: 20px;
        margin-left: 10px;
        margin-top:0;
        color:black;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;
      } 
    }
    
    /* &.imgShowing-false{
        opacity: 1;
        pointer-events: visible;
        margin: auto;
        
    } */

`
// const Gok = styled.img`
//   src : url(${props => props.src});
//   width:40px;
//   height:40px;

// `


const Mplay = styled.div`
        &::after {
        ${afterIcon}
        top: 30px;
        bottom: 0;
        left: 46px;
        background-position: -491px -439px;
        width: 13px;
        height: 16px;
        margin-left: 10px;
        transition: height 0.5s ease-in,opacity 0.5s ease-in;
        
        }

`

const Part = styled.div`
  display:flex;
  align-items:center;
  width:100%;

`

const Ta = styled.div`
  width:50px;
  height:100%;
  padding-right: 30px;
  padding-left: 25px;

`

const Td = styled.div`
  width:100%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;

`
const Tc = styled.div`
  width:100%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;

`
const Tl = styled.div`
  flex-direction: column;
    display: flex;
    align-items: center;
    line-height: 20px;

`



export default withRouter(GoChart);