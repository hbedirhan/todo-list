import React from 'react'

function Footer({todoList, setTodoList}) {

	const clear = () => {
		setTodoList(todoList.filter(el => el.completed === false))
	}

	const allActive = () => {
		setTodoList(todoList.map(todo => {
			return {...todo, completed: false}
		}));
	}

	const allCompleted = () => {
		setTodoList(todoList.map(todo => {
			return {...todo, completed: true}
		}));
	}

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todoList.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<button className='btn' onClick={allActive} >
					Active
				</button>
			</li>
			<li>
				<button className='btn' onClick={allCompleted}>
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