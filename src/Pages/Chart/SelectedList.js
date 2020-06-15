import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';

import WinModal from './WinModal';
import SmallModal from './SmallModal';



const SelectedList = () => {

  const [ musicState, setMusicState ] = useState([]);
  const [ test, setTest ] =useState([]);
  const [ saw, setSaw ] = useState("");
  const [ modalState, setModalState ] = useState(false);
  const [ likeState, setLikeState ] = useState(false);
  const [ toggle, setToggle ] = useState(true);

  useEffect(() => {

    fetch("/jh_data/jh.json")
    .then((res) => res.json())
    .then((res) => setMusicState(res.data));

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

    
  }, []);

  const Cmodal = (id) =>{
    // console.log("전달받음 id: ",id);
    const selectModal = [...musicState];
    // console.log("selectModal: ", selectModal);
    const i = selectModal.indexOf(id);
    // console.log(i);
    const tes = musicState[i] = {...id}
    // console.log("test:: ", tes);
    setTest({
      test : tes
    })
    setModalState(!modalState)

  }


  const Lmodal = (id) =>{
    // console.log("전달받음 id: ",id);
    const selectModal = [...musicState];
    // console.log("selectModal: ", selectModal);
    const i = selectModal.indexOf(id);
    // console.log(i);
    const tes = musicState[i] = {...id}
    // console.log("xxxx ", tes.select);
    console.log("mn", tes.select);
    setTest({
      test : tes
      
    })
    setSaw({
      saw : (!tes.select)
      
    })
    

    setLikeState(!likeState)
    
  }

  const CloseModal = (close) =>{
    setModalState(!modalState)
  }

  const Heart = (like) =>{
    setLikeState(!likeState)
    setToggle(!toggle)
    
  }
  
  // const Smart = (mart) =>{
  //   setLikeState(!likeState)
  //   setToggle(!toggle)
  // }
  // console.log("zsk",musicState && musicState.select);
  return (
        
          <Tbody>
            {musicState.map((d, i) => (
              <tr key={d.id}>
                <OneList>
                <th scope="row">
                  <input onChange={event => {
                    let checked = event.target.checked;
                    setMusicState(
                      musicState.map(data => {
                      if(d.id === data.id) {
                        data.select = checked;
                        }
                        return data;
                      })
                    );
                  }} 
                    type="checkbox" 
                    checked={d.select}>                      
                  </input>
                </th>
                <SelectOne>
                    <img src={d.m_url} style={{width: 40, height: 40}} alt=""/>
                    <Ta>{d.id}</Ta>
                    <Td style={{color: "black"}}>{d.name}</Td>
                    <Tc>{d.vocal}</Tc>
                    <Tc>{d.album}</Tc>
                    {/* <Win className={`modalBackground modalShowing-${winState}`}>
                      <WinModal/>
                    </Win> */}
                    {/* <WindowModal onClick={() => WindowModal()}>open</WindowModal> */}
                    <Tag className={`modalBackground modalShowing-${modalState}`}>
                      <WinModal CloseModal={CloseModal} test={test}/>
                    </Tag>
                    <Tmp3></Tmp3>
                    <Tmodal onClick={() =>Cmodal(d)} ></Tmodal>
                    <Lag className={`likeBackground likeShowing-${likeState}`}>
                      <SmallModal Heart={Heart} test={test} saw={saw} />
                    </Lag>
                    { toggle ?
                    (<Tlike onClick={() => Lmodal(d)} ></Tlike>) 
                    : <Theart onClick={() => Lmodal(d)}></Theart> }
                </SelectOne>
                </OneList>
              </tr>
            ))}
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
  

`
const OneList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background: rgb(228, 228, 228);;
    cursor: pointer;
  }


`

const SelectOne = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;

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
  width:70%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;

`

const Tag = styled.div`
 
  width:100%;
  height:100%;
  padding: 12px 0;
  margin:0 auto;
  display:flex;
  text-align: center;
  justify-content: center;


  &.modalBackground{
    opacity: 0;
    pointer-events: none;
    /* transition: opacity 0.4s ease-in-out; */
     width:500px;
     height:500px;
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     background-color: #fff;
     /* transition: all .2s ease; */
     box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
     border-radius:6px;
     z-index:2;
  }
  &.modalShowing-true{
    opacity: 1;
    pointer-events: visible;
    margin: auto;
  }

`

const Lag = styled.div`
  


  &.likeBackground{
    opacity: 0;
    pointer-events: none;
    /* transition: opacity 0.4s ease-in-out; */
     width:200px;
     height:300px;
     position: absolute;
     /* left: 0; */
     right: 5%;
     bottom: 0;
     top: 25%;
     background-color: #fff;
     /* transition: all .2s ease; */
     box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
     border-radius: 4px;
     z-index:15;
  }
  &.likeShowing-true{
    opacity: 1;
    pointer-events: visible;
    margin:right;
  }

`
const Theart = styled.div`
  &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      background-position: -718px -160px;
      width: 18px;
      height: 18px;
      margin-left: 10px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      
    }

`

const Tmodal = styled.button`
  margin-left:20px;
  background-color: transparent;
  &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 20px;
      height: 20px;
      background-position: -688px -418px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      
    }

`

const Tmp3 = styled.button`
  margin-left:20px;
  background-color: transparent;
  &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 28px;
      height: 20px;
      background-position: -638px -562px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
      
    }

`


const Tlike = styled.button`
  margin-left:20px;
  background-color: transparent;
  &::after {
      ${afterIcon}
      top: 30px;
      bottom: 0;
      left: 46px;
      width: 18px;
      height: 18px;
      background-position: -718px -303px;
      transition: height 0.5s ease-in,opacity 0.5s ease-in;
    }

`

export default withRouter(SelectedList);