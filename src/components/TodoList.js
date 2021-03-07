import React from 'react';
import useTodo from '../hooks/useTodo';
import TodoItem from './TodoListItem';
import './TodoList.scss';

function TodoList() {
  const { todos, onToggle, onRemove } = useTodo();
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
