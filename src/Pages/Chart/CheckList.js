import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CheckBox from './CheckBox';
import './CheckList.scss';



class  CheckList extends Component {
    constructor(){
        super();
        this.state={
           
            // music:[
            //     {id: 1, value: "1    에잇", isChecked: false},
            //     {id: 2, value: "2    아로하", isChecked: false},
            //     {id: 3, value: "3    사랑하게 될 줄 알았어", isChecked: false},
            //     {id: 4, value: "4    살짝 설렜어", isChecked: false},
            //     {id: 5, value: "5    좋은 사람 있으면 소개시켜줘", isChecked: false},
            //     {id: 6, value: "6    화려하지 않은 고백", isChecked: false},
            //     {id: 7, value: "7    아무노래", isChecked: false},
            //     {id: 8, value: "8    그대 고운 내사랑", isChecked: false},
            //     {id: 9, value: "9    깡", isChecked: false},
            //     {id: 10, value: "10    나비와 고양이", isChecked: false}
            //   ],
              nums: 0
        };
       
    }

    componentDidMount = () =>{
        fetch("/jh_data/jh.json")
        .then((res) => res.json())
        .then((res) => this.setState({data: res.data}));
        

    };

    // handleAllChecked = (event) => {
    //     let music = this.state.music
    //     music.forEach(music => music.isChecked = event.target.checked) 
    //     this.setState({music: music})
    //   }
    
      handleCheckChieldElement = (event) => {

        let data = this.state.data
        console.log(this.state.data);
        data.forEach(data => {
           if (data.vocal === event.target.value)
           data.isChecked =  event.target.checked
           
        })
        this.setState({
            data: data,
            nums: event.target.value
            
        })
      }

    render() { 
        console.log(this.state.data);
        return (  
            <ul className="MusicCheck">
                
                {   
                    this.state.data.map((pro) => {
                        return (
                        <CheckBox 
                        handleCheckChieldElement={this.handleCheckChieldElement}  {...pro} />)
                    })
                }
                
            </ul>

        );
    }
}
 

export default withRouter(CheckList);