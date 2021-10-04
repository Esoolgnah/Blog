/* eslint=disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';

  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학'])

  return (
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
    <div className = "list">
      <h3> { 글제목[0] } <span onClick={ ()=> {console.log(1)} }>👍🏻</span></h3>
      <p>10월 04일 발행</p>
      <hr/>
    </div>
    <div className = "list">
      <h3> { 글제목[1] }</h3>
      <p>10월 05일 발행</p>
      <hr/>
    </div>
    <div className = "list">
      <h3> { 글제목[2] }</h3>
      <p>10월 06일 발행</p>
      <hr/>
    </div>
    </div>
  );
}

export default App;
