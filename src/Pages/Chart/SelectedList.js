import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
// import IsModal from './IsModal';
import WinModal from './WinModal';
// import MusicModal from './MusicModal';
// import Modal from './Modal';


const SelectedList = () => {

  const [ musicState, setMusicState ] = useState([]);
  const [ modalState, setModalState ] = useState(false);
  // const [ winState, setWinState ] = useState(false);

  useEffect(() => {

    fetch("/jh_data/jh.json")
    .then((res) => res.json())
    // .then((res) => console.log(res.data[0].album));
    .then((res) => setMusicState(res.data));

    setMusicState(
      musicState.map((d) => {
        return{
          id: d.id,
          album: d.album,
          img: d.m_url,
          name: d.name,
          vocal: d.vocal,
          "select":false,
        };
      })
    );
    setMusicState(musicState);

    // let musicState = [
    //   {id: 1 , pic: "https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228",
    //    firstname: "에잇", lastname: "아이유(IU)", major: "에잇"},
    //   {id: 2 , pic: "https://musicmeta-phinf.pstatic.net/album/004/498/4498641.jpg?type=r100Fll&v=20200327115935",
    //   firstname: "아로하", lastname: "조정석", major: "슬기로운 의사생활"},
    //   {id: 3 , pic: "https://musicmeta-phinf.pstatic.net/album/004/574/4574324.jpg?type=r100Fll&v=20200522115942", 
    //   firstname: "사랑하게 될 줄 알았어", lastname: "전미도", major: "슬기로운 의사생활"}


    // ];
    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       "select":false,
    //       id: d.id, 
    //       firstname:d.firstname,
    //       lastname:d.lastname,
    //       major:d.major
    //     };
    //   })
    // );
    // setMusicState(musicState);

    // fetch("/jh_data/jh.json")
    // .then((res) => res.json())
    // .then((res) => this.setState({data: res.data}));
  }, []);

//   const useScroll = () => {
//     // state를 생성합니다.
//     const [state, setState] = useState({
//       x: 0,
//       y: 0
//     });
//     // scrll의 값을 가져와 state를 갱신합니다.
//     const onScroll = () => {
//       setState({ y: window.scrollY, x: window.scrollX });
//     };
//     useEffect(() => {
//       // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다 
//       // onScroll 함수가 실행됩니다.
//       window.addEventListener("scroll", onScroll);
//       return () => window.removeEventListener("scroll", onScroll); 
//     }, []);
//     return state;
//   };

  const Cmodal = () =>{
    setModalState(!modalState)
  }

  const CloseModal = (close) =>{
    setModalState(!modalState)
  }
  // const WindowModal = () =>{
  //   setWinState(!winState)
  // }

  
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
                    <Td>{d.name}</Td>
                    <Td>{d.vocal}</Td>
                    <Td>{d.album}</Td>
                    {/* <Win className={`modalBackground modalShowing-${winState}`}>
                      <WinModal/>
                    </Win> */}
                    {/* <WindowModal onClick={() => WindowModal()}>open</WindowModal> */}
                    <Tag className={`modalBackground modalShowing-${modalState}`}>
                      <WinModal CloseModal={CloseModal}/>
                    </Tag>
                    <Tmodal onClick={() => Cmodal()} >modal</Tmodal>
                </SelectOne>
                </OneList>
              </tr>
            ))}
          </Tbody>
        
  );
}

const Tbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

`
const OneList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;


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
  padding-left: 25px;
  

`
// const Win = styled.div`
//   border: 1px solid black;
//   padding: 12px 0;
//   margin:0 auto;

//   &.modalBackground{
//     opacity: 0;
//     pointer-events: none;
//     transition: opacity 0.4s ease-in-out;
//     width:100%;
//     height:100%;
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     top: 0;
//     background: rgba(0, 0, 0, 0.7);
  
//   }
//   &.modalShowing-true{
//     opacity: 1;
//     pointer-events: Showing;
//   }

// `

const Tag = styled.div`
  border: 1px solid black;
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
    transition: opacity 0.4s ease-in-out;
     width:500px;
     height:500px;
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     background-color: #fbfaf9;
     /* transition: all .2s ease; */
     box-shadow: -5px 5px 10px 0px darkgray;
     border-radius:6px;
     z-index:2;
  }
  &.modalShowing-true{
    opacity: 1;
    pointer-events: visible;
  }

`

// const WindowModal = styled.button`

// `


const Tmodal = styled.button`
  margin-left:20px;

`

export default withRouter(SelectedList);