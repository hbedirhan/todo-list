import { useEffect } from "react";

function Footer({todoList, setTodoList, setStatus, filteredTodos}) {

	const clear = () => {
		setTodoList(todoList.filter(el => el.completed === false))
	}

	const showAll = () => {
		setStatus("all");
	  }
	
	  const showActive = () => {
		setStatus("active");
	  }
	
	  const showCompleted = () => {
		setStatus("completed");
	  }

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{filteredTodos.length} </strong>
				items left
			</span>

			<ul className="filters">
				<li>
					<button className='btn selected' onClick={showAll}>
						All
					</button>
				</li>
				<li>
					<button className='btn' onClick={showActive}>
						Active
					</button>
				</li>
				<li>
					<button className='btn' onClick={showCompleted}>
						Completed
					</button>
				</li>
			</ul>

			<button onClick={clear} className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}

export default Footer