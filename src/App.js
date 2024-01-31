// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '안양 Nu-골든 아파트'
  let [title, setTitle] = useState(['안양의 Su-작은 어떤 곳인가', '그들은 안양을 왜 떠나는가', '안양과 영원'])
  let [likes, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [newTitle, setNewTitle] = useState('untitled');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>Blog // Nu-Golden</h4>
      </div>
      {/* <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
        }}>{title[1]} <span onClick={() => {
          let copy = [...likes]
          copy[1] += 1
          setLike(copy)
        }}>👍</span> {likes[1]} </h4>
        <p>1월 30일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
        }}>{title[2]}</h4>
        <p>1월 30일 발행</p>
      </div> */}

      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModalTitle(i)
                setModal(!modal);
              }}>{title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likes]
                  copy[i] += 1
                  setLike(copy)
                }}>👍</span> {likes[i]}</h4>
              <p>1월 30일 발행</p>
              <button onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>delete</button>
            </div>
          )
        })
      }

      <input type="text" onChange={(e) => {
        setNewTitle(e.target.value);
      }} /><button onClick={() => {
        let copy = [...title];
        let copy2 = [...likes];
        copy2.unshift(0);
        copy.unshift(newTitle);
        setTitle(copy);
        setLike(copy2);
      }}>publish</button>

      {
        modal ? <Modal title={title} modalTitle={modalTitle} setTitle={setTitle} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[props.modalTitle] = '지하상가가 익숙하다는 것';
        props.setTitle(copy);
      }}>글 제목 변경</button>
    </div>
  );
}

export default App;
