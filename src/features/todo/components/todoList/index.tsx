import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Todo } from '../../model/TodoList';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
function TodoList(props: Props) {
  const { todoList, onTodoClick } = props;
  const handleTodoClick = (todo: any, inx: number) => {
    onTodoClick(todo, inx);
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, inx) => (
          <li
            key={todo.id}
            className={classnames({
              'todo-item': true,
              completed: todo.status === 'completed',
            })}
            onClick={() => handleTodoClick(todo, inx)}
          >
            {todo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;

export interface Props {
  todoList: Todo[];
  onTodoClick(todo: any, inx: number): void;
}
