/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState();

  let [modal, modal변경] = useState(false);

  // function 글순서바꾸기(){
  //   let newArray = [...글제목];
  //   newArray.sort();
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0]} <span onClick={ ()=> { 따봉변경( 따봉 + 1) }}>👍🏻</span> {따봉}</h3>
        <p>2월 16일 발행</p>
        <hr/>
        <h3 > { 글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { 글제목[2]} </h3>
        <p>2월 18일 발행</p>  
        <hr/>
      </div>

     
    <button onClick={() => {modal변경(modal===false ? modal = true : modal = false)}} >열고 닫기</button>
    {
    modal === true
    ?< Modal 글제목={글제목} ></Modal>
    :null
    }
    </div>
  );
}

function Modal(props){
  return(
      <div className="modal">
        <h2>{props.글제목[0]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;