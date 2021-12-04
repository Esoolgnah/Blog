/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

    {
      글제목.map(function(글){
        return (
        <div className="list">
          <h3>{글}<span onClick={ ()=> { 따봉변경( 따봉 + 1) }}>👍🏻</span> {따봉}</h3>
          <p>2월 18일 발행</p>
          <hr/>
        </div>
        )
      })
    }
    </div>
  );
}

function Modal(){
  return(
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
