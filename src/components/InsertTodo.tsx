import React, { useState } from 'react';
import { FiPlus, FiStar, } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import '../style/InsertTodo.css';

//props 타입 설정하기 : props로 onAddTodo의 addTodoHandler를 받고 <>안에는  props타입을 적어준다.
//<{ onAddTodo: (매개변수: 타입) => 반환값타입 }>
//반환값이 void인 이유 : return이 없으므로
const InsertTodo: React.FC<{ onAddTodo: (item: string) => void }> = (props) => {
    const [text, setText] = useState("");

    //e는 이벤트 객체인데 타입을 명시하지 않으면 오류가 난다.
    //(e: React.FormEvent) : e는 리액트가 제공하는 폼 이벤트이다.
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        //text에 앞뒤 공백을 제거했을때 공백이 아니라면
        //props에 onAddTodo에 text전달하고, input창 비워주기
        //부모 컴포넌트의 onAddTodo 함수 호출
        if(text.trim() !== "") {
            props.onAddTodo(text);
            setText("");
        }
    }

    //폼이벤트 중 input에 발생한 이벤트만
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //typeScript에서는 e.target이 아니라 e.currentTarget로 사용
        setText(e.currentTarget.value);
    }

    return (
        <div className='insertTodo'>
            <form onSubmit={submitHandler} className='insertform'>
                <input type="text" onChange={changeHandler} placeholder="할 일을 입력하세요"
                 value={text} className="input" maxLength={25} />
                {/* <button type="submit" className="starBtn">
                    <FiStar />
                    <AiFillStar />
                    </button> */}
                <button type="submit" className="addBtn">
                <FiPlus />
                </button>
            </form>
            <p className="lengthInfo">25자 이내로 입력하세요.</p>
        </div>
    );
};

export default InsertTodo;