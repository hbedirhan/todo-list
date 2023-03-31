import {useState,useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './style/style.css'

function Todos() {
    const [todoList, setTodoList] = useState(() => {
      if (localStorage.getItem('todos') === null) {
        return localStorage.setItem('todos', JSON.stringify([]))
      }else {
        return JSON.parse(localStorage.getItem('todos'))
      }
    }
    );
    
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todoList))
    }

    useEffect(() => {
      saveLocalTodos()
    }, [todoList])
  return (
    <div className="todoapp">
        <Header setTodoList={setTodoList} todoList={todoList}/>
        {todoList.map((todo) => 
        <Main key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>)}
        <Footer todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default Todos