import {useState} from 'react'

function Header({todoList, setTodoList}) {
    const [todo, setTodo] = useState('')   

    const onChangeInput = (e) => {
      setTodo(e.target.value)
    }

    const onSubmit = (e) => {
      if (todo === '') {
      return false        
      }else{
        e.preventDefault()
        setTodoList([...todoList, {text: todo, id: Math.random(), completed: false}])
        setTodo('')
      }
    }
  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input className="new-todo" onChange={onChangeInput} value={todo} placeholder="What needs to be done?" autoFocus />
		</form>
	</header>
  )
}

export default Header