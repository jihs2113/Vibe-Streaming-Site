import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';


const ExSelectedList = ({musics, loading}) => {
  let todoList = <div>loading...</div>;
  if(!loading) todoList = musics.map({music} => <Td key={music.id}>{music.title}</Td>)
  const [ musicState, setMusicState ] = useState([]);
  

  useEffect(() => {

    //  fetch("/jh_data/jh.json")
    // .then((res) => res.json())
    // .then((res) => console.log(res.data));
    // .then((res) => setMusicState({musicState: res.data}));

    // setMusicState(
    //   musicState.map((d) => {
    //     return{
    //       id: d.id,
    //       album: d.album,
    //       img: d.m_url,
    //       name: d.name,
    //       vocal: d.vocal,
    //       isChecked: d.isChecked
    //     };
    //   })
    // );
    // setMusicState(musicState);

    let musicState = [
      {id: 1 , pic: "https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228",
       firstname: "에잇", lastname: "아이유(IU)", major: "에잇"},
      {id: 2 , pic: "https://musicmeta-phinf.pstatic.net/album/004/498/4498641.jpg?type=r100Fll&v=20200327115935",
      firstname: "아로하", lastname: "조정석", major: "슬기로운 의사생활"},
      {id: 3 , pic: "https://musicmeta-phinf.pstatic.net/album/004/574/4574324.jpg?type=r100Fll&v=20200522115942", 
      firstname: "사랑하게 될 줄 알았어", lastname: "전미도", major: "슬기로운 의사생활"}


    ];
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
                        data.isChecked = checked;
                        }
                        return data;
                      })
                    );
                  }} 
                    type="checkbox" 
                    checked={d.isChecked}>

                  </input>
                </th>
                <SelectOne>
                {todoList}
                <Td>{d.id}</Td>
                <HeadingImg></HeadingImg>
                <Td>{d.name}</Td>
                <Td>{d.album}</Td>
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
    display: flex;
    align-items: center;

`

const HeadingImg = styled.img.attrs({
  src: "https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228"
})`
width:50px;
height:50px;

    
`

const Td = styled.div`
  
  padding-right: 40px;
  padding-left: 15px;
  
  

`


export default withRouter(ExSelectedList);