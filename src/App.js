import React, {Component, useCallback} from 'react';
import NumBaseball from './baseball/NumberBaseBall';  //숫자야구

import TodoTemplate from './todoComponents/TodoTemplate';  // TodoTemplate, TodoHead , TodoList -> todolist 스타일
import TodoCreate from './todoComponents/TodoCreate';  // input, 입력버튼
import TodoHead from './todoComponents/TodoHead'; // 날짜, 할일 갯수 
import TodoList from './todoComponents/TodoList'; // 각 리스트에 보여지는 것을 넣기
import { TodoProvider } from './todoComponents/TodoContext';


const App = () => {

  //todolist 
  return (
  <>
    <TodoProvider>
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  </TodoProvider>

{/* NumberBaseBall*/}
    {/* <div class="wrap" 
    style={{
      width:"400px",
      height:"500px",
      margin:"50px auto",
      borderRadius:"20px",
      background:"#afd2f1",
      boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)"
      }}>  
      <div> 
        <h1 
        style={{
          textAlign:"center",
          fontSize:"24px",
          fontWeight:"bold",
          paddingTop:"30px",
          color: "#fff",
          textShadow: "0 2px 8px 0 rgba(0, 0, 0, 1)"
          }}
          >Number BaseBall</h1>
        <div class="random" style={{textAlign:"center"}}>
            <div class="question">
                <p class="question_text"></p>
            </div>
            <NumBaseball/>  
          </div>  
        </div>
    </div> */}
  </> 
  );
}
export default App;

//prop = property (태그의 속성을 설정해주는 것) 
//react는 내가 전달한 props를 가져가는 일을 한다.
