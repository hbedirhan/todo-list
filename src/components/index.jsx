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

    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todoList.filter((todo) => todo.completed === true));
          break;
          case "active":
          setFilteredTodos(todoList.filter((todo) => todo.completed === false));
            break;
        default:
          setFilteredTodos(todoList);
          break;
      }
    }
    useEffect(() => {
      filterHandler();
    }, [status])
    
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todoList))
    }

    useEffect(() => {
      setFilteredTodos(todoList)
      saveLocalTodos()
    }, [todoList])
  return (
    <div className="todoapp">
        <Header setTodoList={setTodoList} todoList={todoList}/>
        {filteredTodos.map((todo) => 
        <Main key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>)}
        <Footer todoList={todoList} setTodoList={setTodoList} setStatus={setStatus} filteredTodos={filteredTodos}/>
    </div>
  )
}

export default Todos