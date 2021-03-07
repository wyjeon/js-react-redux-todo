import React from 'react';
import useTodo from '../hooks/useTodo';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList() {
  const { todos, onToggle, onRemove, onUpdate } = useTodo();
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TodoList;
