import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import { connect } from "react-redux";
import { setMKList } from "../../store/actions/index";
import icon from '../../Images/vibe.png';


const ListModal = (props) => {


    const GoPlayList = () =>{
      
        fetch(`http://10.58.0.37:8000/music/add/${props.id}`, {
        method: "POST" ,  
        headers: {  
            Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indsc3hvMjExMkBuYXZlci5jb20ifQ.i9ZWIGY6MUxYXcL344nsrwBiXD4hpvEavLGdYfaBSOs",
        },
        body: JSON.stringify({
            music_id: props.mkList,
        }),
        })
        .then(response => response.json())
        .then(response => 
            {
            if(response.count === 0){
             alert("이미 담은 곡입니다.");
            }else if(response.count>=1){
                alert(response.count+"곡이 담겼습니다.");
            }
            }
            );
    }
   
    return (
        
          <Inner>
            <ModalImage>
                <img className="Mimg" src="https://musicmeta-phinf.pstatic.net/album/004/583/4583296.jpg?type=r420Fll&v=20200605101207"
                        alt=""/>
                <ModalTitle>
                    <span className="ListName" onClick={()=>GoPlayList()}
                        >{props.name}</span>
                    <span className="ListQuantity"
                        >{props.qauntity}곡</span>
                </ModalTitle>
                
             </ModalImage>
         
         </Inner>
    )
}

const mapStateToProps = (state)=>{
    return{
      mkList : state.mkList
    };
  };
  
  export default connect(mapStateToProps,{ setMKList })(withRouter(ListModal));
  

const afterIcon = css`
display: inline-block;
content: "";
background: url(${icon}) no-repeat;
`;

const Inner = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    /* vertical-align: middle; */

 `

const ModalImage = styled.div`
    width:100%;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    margin-left: 20px;
    .Mimg{
        width:40px;
        height:40px;
    }

`
const ModalTitle = styled.div`
    /* padding-top:5%;*/
    padding-left:8%;
    width:100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.5;
    .ListName{
        font-weight: 600;
        cursor:pointer;
    }
    .ListQuantity{
        font-weight: 600;
        cursor:pointer;
    }
   
`


