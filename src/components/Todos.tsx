import React from 'react';
import Todo from './todo';
import TodoItem from './TodoItem';
import '../style/Todos.css';


const Todos: React.FC<{ items: Todo[];
                        onRemoveTodo: (item: string) => void }>
                        = (props) => {

    return (
        <div className='todos'>

                {props.items.map((item) => (
                    <TodoItem key={item.id} text={item.text} id={item.id}
                    onRemoveTodo={props.onRemoveTodo} />
                ))}

        </div>
    );
};

export default Todos;