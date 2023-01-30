import { useState } from 'react';
import '../style/Template.css';
import InsertTodo from './InsertTodo';
import Todo from './todo';
import Todos from './Todos';
import ".."

function HomeComponent() {



  // Todo 클래스로 새로운 배열 만들기
  // todos를 useState()로 관리하기 : useState는 generic 타입으로 Todo[]타입을 받겠다
  const [todos, setTodos] = useState<Todo[]>([]);
 // todos 배열 = [{id:1234, text : 입력한할일},{id:1234, text : 입력한할일}]

  const addTodoHandler = (item: string) => {
    const newTodo = new Todo(item);

    setTodos((prevTodo) => {
      return [...prevTodo, newTodo];
    })
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    }
    )
  }



  return (
    <div className="HomeComponent">
      {/* 입력 컨포넌트 연결하기 */}
      <h1>Todo-List</h1>
      <InsertTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default HomeComponent;
