import React, { useState } from 'react';
import { Todo } from '../../model/TodoList';
import TodoList from '../../components/todoList/index';
const initToList: Todo[] = [
  {
    id: 1,
    status: 'new',
  },
  {
    id: 2,
    status: 'completed',
  },
  {
    id: 3,
    status: 'new',
  },
];
function ListPage(props: any) {
  const [state, setState] = useState(initToList);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const todoList = state;

  const handleTodoClick = (todo: any, inx: number) => {
    const newTodoList = [...state];

    console.log(todo.status, ' ', inx);

    newTodoList[inx] = {
      ...newTodoList[inx],
      status: newTodoList[inx].status === 'new' ? 'completed' : 'new',
    };
    setState(newTodoList);
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  const handleShowAllClick = () => {
    setFilteredStatus('all');
    console.log(renderedTodoList);
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}

export default ListPage;
