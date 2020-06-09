import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const IsModal = () => {
    return (
        <>
        <div>
        <img src="https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r100Fll&v=20200508163228"
        style={{width: 20, height: 20}} alt=""/>
        </div>
        <div><span>좋아요</span></div>
        <div><span>내 플레이리스트 추가</span></div>
        <div><span>바로 다음에 추가</span></div>
        <div><span>맨 아래에 추가</span></div>
        <div><span>MP3 구매</span></div>
        <div><span>가사 보기</span></div>
        <div><span>공유</span></div>
        </>
    )
}


export default withRouter(IsModal);
