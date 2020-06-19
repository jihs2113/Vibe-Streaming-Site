import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';
import { connect } from "react-redux";
import { setMKList } from "../../store/actions/index";
import WinModal from './WinModal';
import SmallModal from './SmallModal';
import './Chart.scss';

const SelectedList = (props) => {
  const [ musicState, setMusicState ] = useState([props]);
  const [ test, setTest ] =useState([]);
  const [ saw, setSaw ] = useState("");
  const [ modalState, setModalState ] = useState(false);
  const [ likeState, setLikeState ] = useState(false);
  const [ toggle, setToggle ] = useState(true);
  const [cot, setCot]=useState([]);
  const [lastLove, setLastLove] = useState([]);

  const body = document.getElementsByTagName('body')[0];

  const Cmodal = (id) =>{
    setTest({
      id
    })
    setModalState(!modalState)
    body.classList.add("not_scroll");
  }

  const Lmodal = (id) =>{
    setTest({
      test : id
    })
    setSaw({
      saw : (!id.select) 
    })
   
    setLikeState(!likeState)
  }

  const CloseModal = (close) =>{
    setModalState(!modalState)
    body.classList.remove("not_scroll");
  }

  const AddList = (listId) =>{
    fetch(`http://10.58.0.37:8000/account/myfavorite`, {
      method: 'POST' ,  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: listId,
      }),
    });
  }

  const Heart = (likgId) =>{
    setLikeState(!likeState)
    setToggle(!toggle)
    fetch(`http://10.58.0.37:8000/account/myfavorite`, {
      method: toggle ? "POST" : "DELETE",  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: likgId,
      }),
    });
    
  }

  const HandleLink = (id) =>{
    props.history.push(`/track/${id}`);
  }
  
  const [ sum, setSum ] = useState({
    cnt:[]
  })

  const Check = (e, id) =>{

    props.setMKList(id);

    fetch(`http://10.58.0.37:8000/music/add/${id}`, {
      method: "POST" ,  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: props.mkList,
      }),
    });

  }


  return (
          <Tbody>          
              <tr key={props&&props.id}>
                <OneList>
                  <th scope="row">
                    <input type="checkbox" onChange={(event)=>Check(event,props.id )}
                    />
                  </th>
                  <SelectOne>
                      <img src={props && props.img} alt=""/>
                      <Num>{props && props.rank}</Num>
                      <Name onClick={()=>HandleLink(props.id)}
                        style={{color: "black"}}>{props && props.name}</Name>
                      <ArtistAlbum>{props && props.artist}</ArtistAlbum>
                      <ArtistAlbum>{props && props.album}</ArtistAlbum>
                      
                        <Tag className={`modalBackground modalShowing-${modalState}`}>
                          <WinModal CloseModal={CloseModal} test={props}/>
                        </Tag>
                      
                      <Tmp3></Tmp3>
                      <Tmodal onClick={()=>Cmodal(props)}></Tmodal>
                   
                      <ModalWrapper
                        // x={x} y={y}
                        className={`likeBackground likeShowing-${likeState}`}
                        >
                        <SmallModal 
                        AddList={AddList}
                        Heart={Heart} test={props} saw={saw} toggle={toggle}  />
                      </ModalWrapper>
                      { toggle ?
                      (<Tlike onClick={() => Lmodal(props)} ></Tlike>) 
                      : <Theart onClick={() => Lmodal(props)}></Theart> }
                  </SelectOne>
                </OneList>
              </tr>
         
          </Tbody>
        
  );
}

const mapStateToProps = (state)=>{
  return{
    mkList : state.mkList
  };
};

export default connect(mapStateToProps,{ setMKList })(withRouter(SelectedList));

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
  position:relative;
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
    img {
      width: 40px;
      height: 40px;
    }
    
`

const Num = styled.div`
  width:50px;
  height:100%;
  padding-right: 30px;
  padding-left: 25px;

`

const Name = styled.div`
  width:100%;
  height:100%;
  padding-right: 30px;
  color: rgb(153, 153, 153);
  font-size:14px;

`
const ArtistAlbum = styled.div`
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
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,0.16);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
    border-radius: 6px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.modalShowing-true{
    opacity: 1;
    pointer-events: visible;
    /* margin: auto; */
  }

`

const ModalWrapper = styled.div`
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
    
    /* margin-right: ${props=>props.x}px; */
    /* margin:right; */
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

