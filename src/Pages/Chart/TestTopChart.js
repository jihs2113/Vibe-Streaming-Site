import React, {useState , useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';


function TestTopChart () {

  const [ musicState, setMusicState ] = useState({hits: []});

  useEffect(() => {
    const fetchData = async () =>{
    const result = await fetch(
      "/jh_data/jh.json"
    );
    setMusicState(result.musicState);
    };
    fetchData();
  }, []);
    // let musicState = [
    //   {id: 1 , firstname: "에잇", lastname: "아이유(IU)", major: "에잇"},
    //   {id: 2 , firstname: "아로하", lastname: "조정석", major: "슬기로운 의사생활"},
    //   {id: 3 , firstname: "사랑하게 될 줄 알았어", lastname: "전미도", major: "슬기로운 의사생활"}


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
 

  return (
      
      <div className="container">
        <table>
          <Thead>
            <tr>
            <OneList>
              <th scope="col">
                <input type="checkbox" onChange={(e) =>{
                  let checked=e.target.checked;
                  setMusicState(musicState.hits.map((d)=>{
                    d.select=checked;
                    return d;
                  }))

                }}>
              
                </input>
              </th>
              <SelectOne>
              <Th scope="col">All</Th>
              <Th scope="col">Title</Th>
              <Th scope="col">Vocal</Th>
              </SelectOne>
              </OneList>
            </tr>
          </Thead>
          <Tbody>
            {musicState.hits.map((d, i) => (
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
                <Td>{d.firstname}</Td>
                <Td>{d.lastname}</Td>
                <Td>{d.major}</Td>
                </SelectOne>
                </OneList>
              </tr>
            ))}
          </Tbody>
        </table>
      </div>
    
    
    
  );
}

const Thead = styled.div`
 
  margin-top: 10px;

`

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
    align-content: space-between;

`

const Th = styled.div`
  
  padding-right: 20px;
  
  

`

const Td = styled.div`
  
  padding-right: 20px;
  
  

`

export default withRouter(TestTopChart);