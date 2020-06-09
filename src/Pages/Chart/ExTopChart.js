import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SelectedList from './SelectedList';
import styled from 'styled-components';

const useFetch = (callback, url) =>{

  const [loading, setLoading] = useState(false);

  const fetchIntialData = async () =>{
    setLoading(true);
    const res = await fetch(url);
    const initialData = await res.json();
    callback(initialData);
    setLoading(false);

  }

  useEffect ( () => {
    console.log(1);
    fetchInitialData();
  }, [])

  return loading;
}



const ExTopChart = () => {

  const [ musicState, setMusicState ] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setMusicState, '/jh_data/jh.json');
  
  const changeInputData = (e) =>{
    setNewTodo(e.target.value);
  }

  const addTodo = (e) =>{
    e.preventDefault();
    setMusicState([...musicState, {'title': newTodo,
      'id': musicState.length, 'status': 'todo'
    }]);
  }

    useEffect( () => {
      console.log("render", musicState);
    }, [musicState])
  // useEffect(() => {

  //   //  fetch("/jh_data/jh.json")
  //   // .then((res) => res.json())
  //   // .then((res) => console.log(res.data));
  //   // .then((res) => setMusicState({musicState: res.data}));

  //   // setMusicState(
  //   //   musicState.map((d) => {
  //   //     return{
  //   //       id: d.id,
  //   //       album: d.album,
  //   //       img: d.m_url,
  //   //       name: d.name,
  //   //       vocal: d.vocal,
  //   //       isChecked: d.isChecked
  //   //     };
  //   //   })
  //   // );
  //   // setMusicState(musicState);

  //   // let musicState = [
  //   //   {id: 1 , pic: "https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228",
  //   //    firstname: "에잇", lastname: "아이유(IU)", major: "에잇"},
  //   //   {id: 2 , pic: "https://musicmeta-phinf.pstatic.net/album/004/498/4498641.jpg?type=r100Fll&v=20200327115935",
  //   //   firstname: "아로하", lastname: "조정석", major: "슬기로운 의사생활"},
  //   //   {id: 3 , pic: "https://musicmeta-phinf.pstatic.net/album/004/574/4574324.jpg?type=r100Fll&v=20200522115942", 
  //   //   firstname: "사랑하게 될 줄 알았어", lastname: "전미도", major: "슬기로운 의사생활"}


  //   // ];
  //   // setMusicState(
  //   //   musicState.map((d) => {
  //   //     return{
  //   //       "select":false,
  //   //       id: d.id, 
  //   //       firstname:d.firstname,
  //   //       lastname:d.lastname,
  //   //       major:d.major
  //   //     };
  //   //   })
  //   // );
  //   // setMusicState(musicState);

  //   // fetch("/jh_data/jh.json")
  //   // .then((res) => res.json())
  //   // .then((res) => this.setState({data: res.data}));
  // }, []);

  
  return (
    
    <> 
      <div className="container">
        <table>
          <Thead>
            <tr>
            <OneList>
              <th scope="col">
                <input type="checkbox" onChange={(e) =>{
                  let checked=e.target.checked;
                  setMusicState(musicState.map((d)=>{
                    d.isChecked=checked;
                    return d;
                  }))

                }}>
              
                </input>
              </th>
              <SelectOne>
              <Th scope="col">All</Th>
              <Th scope="col">album</Th>
              <Th scope="col">Title</Th>
              <Th scope="col">Vocal</Th>
              </SelectOne>
              </OneList>
            </tr>
          </Thead>
          <input type="text" name="" onChange={changeInputData}/>
          <button onClick={addTodo}>할일추가</button>
          <SelectedList musics={musicState} loading={loading}/>
        </table>
      </div>
    </>
    
  );
}

const Thead = styled.div`
 
  margin-top: 20px;

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

const Th = styled.div`
  
  padding-right: 40px;
  padding-left: 15px;
  

`


export default withRouter(ExTopChart);