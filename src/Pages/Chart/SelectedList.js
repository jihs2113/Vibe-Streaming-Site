import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import icon from '../../Images/vibe.png';
import { connect } from "react-redux";
import { setMKList } from "../../store/actions/index";
import WinModal from './WinModal';
import SmallModal from './SmallModal';

const SelectedList = (props) => {
  const [ musicState, setMusicState ] = useState([props]);
  const [ test, setTest ] =useState([]);
  const [ saw, setSaw ] = useState("");
  const [ modalState, setModalState ] = useState(false);
  const [ likeState, setLikeState ] = useState(false);
  const [ toggle, setToggle ] = useState(true);
  const [cot, setCot]=useState([]);
  const [lastLove, setLastLove] = useState([]);
  // const [ count, setCount ] = useState({
  //     ct:0,
  //     dt:[],
  //     st:false
  // });
  //count data check

  // useEffect(() => {
  //   setMusicState(props)
  // }, []);

  const Cmodal = (id) =>{
    // const selectModal = [...musicState];
    // const i = selectModal.indexOf(id);
    // const tes = musicState[i] = {...id}
    setTest({
      // test : tes
      id
    })
    setModalState(!modalState)
  }

  const Lmodal = (id) =>{
    // const selectModal = [...musicState];
    // const i = selectModal.indexOf(id);
    // const tes = musicState[i] = {...id}
    setTest({
      // test : tes
      test : id
    })
    setSaw({
      saw : (!id.select) 
    })
    // setPosition(
    //   position
    // )
    setLikeState(!likeState)
  }

  const CloseModal = (close) =>{
    setModalState(!modalState)
  }
  // const {ct, dt, st} = count

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
    // setLastLove(likgId)
    
  }

  const HandleLink = (id) =>{
    props.history.push(`/track/${id}`);
  }
  // const CountChange = e => {
  //   let checked = e.target.checked
  //   setMusicState({
  //     if(props.id==)
  //   })

  //   setCount({
  //     ...count,
  //     st: e.target.checkd,
  //     ct: ct+1
  //   })
  // }
  // const [choose setChoose]= useState(false);
  // const CountChange = (event) =>{
  //   const cat = event.target.checkd;
  //   console.log("ccc",cat);
  //   setCount({
  //     ...count,
  //     st: (!cat),
  //     ct: ct+1
  //   })
    // console.log("omg",st);
    // console.log("ooom",ct);
    

  // }

  // const {ct, dt } = count
  // const ot = [];
  // const Scount = (d) =>{
    
  //   ot.push(d.id)
  //   console.log("ohh",d);
  //   setCount({
  //     ...count,
  //     ct: ct+1,
  //     dt: ot+d.id
  //   })
  //   console.log("ac",dt)
  // }

  // const Sdecount = (d) =>{
  //   console.log("ohh",d);
  //   setCount({
  //     ...count,
  //     ct: ct-1,
  //   })
  // }

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
  //   window.addEventListener("mousemove", setFromEvent);

  //   return () => {
  //     window.removeEventListener("mousemove", setFromEvent);
  //   };
  // }, []);

  // const {x , y} = position;
  // console.log("pt", x);
  // console.log("ct",ct);
  // console.log("mm", st);
  // const Smart = (mart) =>{
  //   setLikeState(!likeState)
  //   setToggle(!toggle)
  // }
  // console.log("zsk",musicState && musicState.select);

  // console.log("po",props&&props.name);
  // console.log("sddd",musicState);
  // console.log("cot",cot)
  const [ sum, setSum ] = useState({
    // num:0,
    // check:false,
    cnt:[]
  })

  const Check = (e, id) =>{
    // console.log("dds",e.target.checked);
    // console.log("ddr", id);
    // console.log("dns",e.target);

    props.setMKList(id);
    console.log("js",props);
    console.log("jh",props.mkList.length);
    
    fetch(`http://10.58.0.37:8000/music/add/${id}`, {
      method: "POST" ,  
      headers: {  
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
      },
      body: JSON.stringify({
        music_id: props.mkList,
      }),
    });

    // console.log(props.mkList);
    // setSum{(

    // )}

  }


  // console.log("nb",lastLove);
  return (
          <Tbody>          
            {/* {props&&props.map((music, i) => ( */}
              <tr key={props&&props.id}>
                <OneList>
                  <th scope="row">
                    <input type="checkbox" onChange={(event)=>Check(event,props.id )}
                      // onChange={(event)=>props.CountChange(props.id)}
                      // onChange={event =>{
                      //   let checked = event.target.checked;
                      //   props.select=checked;
                      //   setMusicState(
                      //     musicState.map(data => {
                      //     if(musicState.id === data.id) {
                      //       data.select = checked;
                      //       // console.log("ego",data);
                      //         if(data.select===true){
                      //           Scount(data);
                      //           }
                      //         else Sdecount(data);
                      //       }
                      //       return data;
                      //     })
                      //   );
                      // }}
                    />
                    {/* {musicState.map((d, i) => (
                    <input onChange={event => {
                      let checked = event.target.checked;
                      setMusicState(
                        musicState.map(data => {
                        if(d.id === data.id) {
                          data.select = checked;
                          // console.log("ego",data);
                            if(data.select===true){
                              Scount(data);
                              }
                            else Sdecount(data);
                          }
                          return data;
                        })
                      );
                    }} 
                      type="checkbox">                      
                    </input> */}
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
                      {/* <Tmodal onClick={() =>Cmodal(props)} ></Tmodal> */}
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
            {/* ))} */}
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

