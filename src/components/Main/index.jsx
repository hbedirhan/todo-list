
function Main({todoList, setTodoList, todo}) {
	
	const deleted = () => {
		setTodoList(todoList.filter((el) => el.id !== todo.id))
	}

	const completeHandler = () => {
		setTodoList(todoList.map((item) => {
			if (item.id === todo.id) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}
	
  return (
	<section className="main">
		<ul className="todo-list">
			<li className={`${todo.completed ? 'completed' : 'view'}`}>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={completeHandler} checked={todo.completed}/>
					<label>{todo.text}</label>
					<button className="destroy" onClick={deleted}></button>
				</div>
            </li>
			
		</ul>
	</section>
  )
}

export default Main