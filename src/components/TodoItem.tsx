import React, { useState } from 'react';
import { FiMinus } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import '../style/TodoItem.css'

const TodoItem: React.FC<{text: string;
                          id: string;
                          onRemoveTodo: (id: string) => void}> 
                          = (props) => {



    return (
        <div className='todoItem'>
            <div className='todoText'>
            <button className="checkIcon" >
                <AiOutlineCheck color="#b7b7b7" /></button>
                {props.text}                
            </div>
            <div>
                <button className="deleteIcon" onClick={() => props.onRemoveTodo(props.id)}><FiMinus /></button>
            </div>
        </div>
    );
};

export default TodoItem;