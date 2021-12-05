/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      ...
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
